import weatherCard from './weatherCard';

describe('forecaster: weatherCard', ()=>{
  var directive;
  beforeEach(angular.mock.inject(()=>{
    directive = new weatherCard();
  }));
  it('is defined', ()=>{
    expect(directive).not.toBeUndefined();
  });
  it('has the proper values', ()=>{
    expect(directive.template).toBeDefined;
  })
})
