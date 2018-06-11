import EntitiesModule from './entities';
import EntitiesController from './entities.controller';
import EntitiesComponent from './entities.component';
import EntitiesTemplate from './entities.html';

describe('Entities', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EntitiesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EntitiesController();
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
      expect(EntitiesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EntitiesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EntitiesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EntitiesController);
    });
  });
});
