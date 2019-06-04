import dom from 'dom-hand';
import dataset from './../../../assets/data';
import './basic.scss';

/**
 * Creates a new Basic components.
 * @class Basic
 */
class Basic {

  constructor() {

    this.createElement("basic", "basic");

    console.log('-- dataset --', dataset);

  }

  /**
   *  Create a Div Element
   * @param {*} name 
   * @param {*} value 
   */
  createElement( name = String(), value = String()) {

    let body = dom.select( 'body' );
    this.el = document.createElement('div');
    this.el.innerHTML = value
    dom.classes.add( this.el , name );
    body.appendChild( this.el  );

  }

}

export default Basic
