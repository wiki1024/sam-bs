import React from 'react'
import ReactDOM from 'react-dom';
import uncontrollable from 'uncontrollable';


const propTypes = {
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    open: React.PropTypes.bool,
    onToggle: React.PropTypes.func,
  }
class SimpleDropdown extends React.Component {


  render() {
    return (
      <div>
        <input
          value={this.props.value}
          onChange={ e => this.props.onChange(e.target.value)}
        />
        <button onClick={ e => this.props.onToggle(!this.props.open)}>
          open
        </button>
        { this.props.open &&
          <ul className='open'>
            <li>option 1</li>
            <li>option 2</li>
          </ul>
        }
      </div>
    )
  }

}

SimpleDropdown.propTypes=propTypes

const UncontrolledDropdown = uncontrollable(SimpleDropdown, { value: 'onChange', open: 'onToggle' });

export default UncontrolledDropdown