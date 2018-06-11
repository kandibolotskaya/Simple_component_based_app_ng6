export default class EntitiesService {

  constructor() {
    if (!localStorage.getItem('entities')) {
      debugger;
      this.$init();
    }

    this.entities = JSON.parse(localStorage.getItem('entities'));
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

  resetEntities() {
    // dirty hack for resetting to initial state;

    localStorage.clear();
    location.reload();
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
}