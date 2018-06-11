import EntitiesListModule from './entitiesList';
import EntitiesListController from './entitiesList.controller';
import EntitiesListComponent from './entitiesList.component';
import EntitiesListTemplate from './entitiesList.html';

describe('EntitiesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EntitiesListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EntitiesListController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(EntitiesListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EntitiesListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EntitiesListTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EntitiesListController);
    });
  });
});
