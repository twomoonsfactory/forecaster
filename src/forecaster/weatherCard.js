class weatherCard {
  constructor(){
    this.restrict = 'E';
    this.scope = {};
    this.template = require('./weatherCardTemp.html');
    this.controller = weatherCardController;
  }

  link(scope, elem, attrs, ctrl){

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
  constructor($scope, forecastService, $log){
    this.forecastService = forecastService;
    this.$log = $log;
    this.$scope = $scope;
    this.$scope.weather = {};
    this.$scope.states = {
      entry: 'entry',
      display: 'display',
      error: 'error'
    }
    this.$scope.state = this.$scope.states.entry;

    this.$scope.searchBy = '';
    this.$scope.error = '';

    this.$scope.getWeather = ()=>{
      if(this.$scope.searchBy.toString().length!==5){
        this.$scope.error = "You must enter a 5 digit zip code."
      }
      else {
        this.$scope.error = ""
        this.forecastService.pullCurrentWeatherByZip(this.$scope.searchBy/1, (data)=>{
          this.$scope.weather = data;
          if(this.$scope.weather.cod==="404"||!this.$scope.weather){
            this.$scope.state = this.$scope.states.error;
          }
          else{
            this.$scope.state = this.$scope.states.display;
         }
        });
        this.$log.log('Worked');
      }
    }

    this.$scope.clear = ()=>{
      this.$scope.state = this.$scope.states.entry;
    }

    this.$scope.$watch('searchBy', (newVal, oldVal) => {
      if(newVal)
        this.$scope.searchBy = newVal.toString().length>5 ? oldVal : newVal;
    })
  }
}

weatherCardController.$inject = ['$scope', 'forecastService', '$log'];

export default weatherCard;
