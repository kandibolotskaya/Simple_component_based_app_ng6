export default class EntitiesService {

  constructor() {    
    if (!localStorage.getItem('entities')) {
      this.$init();
    }

    this.entities = JSON.parse(localStorage.getItem('entities'));
  }

  $init() {
    const mock = [
      {
        id: 1,
        connected: false,
        entity: 'Arrivals',
        event: 'BPM'
      },
      {
        id: 2,
        connected: false,
        entity: 'Car Wash',
        event: 'BPM'
      },
      {
        id: 3,
        connected: false,
        entity: 'Maintance',
        event: 'Project'
      },
      {
        id: 4,
        connected: false,
        entity: 'Customer payment',
        event: 'BPM'
      },
      {
        id: 5,
        connected: false,
        entity: 'Technical issues',
        event: 'Project'
      },
    ];

    localStorage.setItem('entities', JSON.stringify(mock));
  }

  getAll() {
    return Promise.resolve(this.entities);
  }

  getConnected() {
    return this.getAll()
      .then(entities => entities.filter(ent => ent.connected));
  }

  getDisconnected() {
    return this.getAll()
      .then(entities => entities.filter(ent => !ent.connected));
  }

  search(query) {
    return this.getDisconnected()
      .then(entities => entities.filter(ent => ent.entity.toLowerCase().indexOf(query.toLowerCase()) > -1 ));
  }

  reset() {
    localStorage.clear();
    location.href = '/';
  }

  update(entities) {
    if (!entities) {
      return Promise.resolve(true)
    }

    entities.forEach(ent => {
      if (!ent.connected) {
        return;
      }

      const target = this.entities.find(entity => ent.id === entity.id);
      target.connected = ent.connected;
    })

    localStorage.setItem('entities', JSON.stringify(this.entities));

    return Promise.resolve(true);
  }

  sort(type) {
    const sortFn = (a, b) => {
      return ('' + a.entity).localeCompare(b.entity)
    };

    if (type === 'connected') {
      return this.getConnected()
        .then(entities => entities.sort(sortFn));
    }

    if (type === 'disconnected') {
      return this.getDisconnected()
        .then(entities => entities.sort(sortFn));
    }
  }

}