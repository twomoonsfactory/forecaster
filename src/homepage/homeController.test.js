import homeController from './homeController';

describe('homepage: homeController', ()=>{
  var $rootScope, $log, ctrl;

  beforeEach(angular.mock.inject((_$rootScope_,  _$log_)=>{
    $rootScope = _$rootScope_;
    $log = _$log_;
    ctrl = new homeController($log);
  }));

  it('tests are working', ()=>{
    expect(true).toBeTruthy();
  });

  it('pulls scope values', ()=>{
    expect(ctrl.test).toBeTruthy();
  })
})
