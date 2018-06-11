export default class EntitiesConnectController {
  constructor(entitiesService, $timeout, $state) {
    "ngInject";

    // angular
    this.$timeout = $timeout;
    this.$state = $state;

    // services
    this.entitiesService = entitiesService;

    // component properties
    this.query = '';
    this.entities = [];
    this.timeout = null;
    this.loading = true;
    this.allowReset = false;

    this.$init();
  }

  // initial call to get fresh data
  $init() {
    this.entitiesService.getDisconnected()
      .then(data => {
        this.entities = data;
        this.allowReset = this.entities.length < 1;
        this.hideLoading();
      })
      .catch(error => console.error(error));
  }

  // immitation of a server-response with throttling;
  applySearch(event) {
    
    if ((event.keyCode > 8 && event.keyCode < 46) || event.ctrlKey) {
      event.preventDefault();
      return;
    }

    this.loading = true;

    if (!this.query.length) {
      return this.$init();
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = this.$timeout(() => {
      this.entitiesService.search(this.query)
        .then(data => {
          this.entities = data;
          this.hideLoading();
        })
        .catch(error => consol.error(error));
    }, 400);
  }

  // to let the view re-render with new results
  hideLoading() {
    this.$timeout(() => this.loading = false, 200)
  }

  // reset whole application state
  reset() {
    this.entitiesService.reset();
  }

  // connect selected items
  connect() {
    this.entitiesService.update(this.entities)
      .then(() => this.$state.go('home'))
      .catch(error => console.error(error));
  }

  // sort items
  sort() {
    this.loading = true;

    this.entitiesService.sort('disconnected')
      .then(data => {
        this.entities = data;
        this.hideLoading();
      })
      .catch(error => console.error(error));
  }

}