class HomeController {
  constructor(entitiesService) {
    "ngInject";

    this.entitiesService = entitiesService;
    this.entities = [];
    this.showList = false;
    this.showTooltip = false;

    this.$init();
  }

  $init() {
    this.entitiesService.getConnected()
      .then(data => this.entities = data)
      .catch(error => console.log(error));
  }

  toggleList(event) {
    event.preventDefault();
    this.showList = !this.showList;
    this.showTooltip = false;
  }
}

export default HomeController;
