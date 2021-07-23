import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Display(props) {
    return (
        <div>
        
        {['Novels', 'Chapters', 'Characters', 'Locations', 'Plots', 'Scenes'].map(
                (variant) => (
                    <DropdownButton
                      as={ButtonGroup}
                      key={variant}
                      id={`dropdown-variants-${variant}`}
                      variant={variant.toLowerCase()}
                      title={variant}
                    >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                  Active Item
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownButton>
                )
            )}
        </div>
    );
}

export default Display;