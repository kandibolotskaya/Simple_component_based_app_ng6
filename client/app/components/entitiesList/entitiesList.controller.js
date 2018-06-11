class EntitiesListController {
  constructor(entitiesService) {
    "ngInject";
    this.entitiesService = entitiesService;
    this.entities = [];
    this.$init();
  }

  $init() {
    this.entitiesService.getConnected()
      .then(data => this.entities = data)
      .catch(error => console.error(error));
  }
}

export default EntitiesListController;
