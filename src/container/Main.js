import InitialState from './../config/initialState';

import Basic from './components/Basic/';

/**
 * Creates a new Main container.
 * @class
 */
class Main{

  constructor(){

    this.init();

  }

  init(){

    new InitialState()
    this.appStart();

  }

  appStart( ){

    new Basic();

  }

}

export default Main
