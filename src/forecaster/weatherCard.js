class weatherCard {
  constructor(){
    this.restrict = 'E';
    this.scope = {
        zip:'=zip'
    };
    this.template = '';
    this.controller = weatherCardController;
  }

  link(scope, elem, attrs, ctrl){
    let weather = {};
    ctrl.forecastService.pullCurrentWeatherByZip(scope.zip, (data)=>{
      weather = data;
      if(weather.cod==="404"||!weather){
        elem[0].innerHTML = '<div>Please enter a valid ZIP code.  If the problem persists the service may be down.</div>';
      }
      else{
        elem[0].innerHTML = '<div>City: '+weather.name+'</div>\
                             <div>Temp: '+weather.main.temp+'&#8457</div>\
                             <div>Status: '+weather.weather[0].main+'</div>';
     }
    });
    ctrl.$log.log('Worked');

  }

  compile(tElement){
    return this.link.bind(this);
  }

  static directiveFactory(){
    weatherCard.instance = new weatherCard();
    weatherCard.$inject = ['forecastService'];
    return weatherCard.instance;
  }
}

class weatherCardController{
  constructor(forecastService, $log){
    this.forecastService = forecastService;
    this.$log = $log;
  }
}

weatherCardController.$inject = ['forecastService', '$log'];

export default weatherCard;
