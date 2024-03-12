import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, fab);

export default function Button({label,icon,callback}) {
  return (
    <div className='button' onClick={callback}>
          <div className="icon">
              <FontAwesomeIcon icon={[icon.collection, icon.name]} />
          </div>
          <div className="label">
              {label}
          </div>
    </div>
  )
}
