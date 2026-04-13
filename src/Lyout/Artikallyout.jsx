import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Artikallyout() {
  return (
    <div>
      
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium quae error expedita ullam, illo magnam natus voluptates, in quasi, enim nostrum delectus maiores aliquid modi eaque corporis? Sit, ratione.</h1>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum facere, error explicabo consequatur modi esse ipsa neque magnam aperiam velit reiciendis quasi sunt voluptatum rem odit voluptatibus provident sint.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum facere, error explicabo consequatur modi esse ipsa neque magnam aperiam velit reiciendis quasi sunt voluptatum rem odit voluptatibus provident sint.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum facere, error explicabo consequatur modi esse ipsa neque magnam aperiam velit reiciendis quasi sunt voluptatum rem odit voluptatibus provident sint.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum facere, error explicabo consequatur modi esse ipsa neque magnam aperiam velit reiciendis quasi sunt voluptatum rem odit voluptatibus provident sint.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est illum facere, error explicabo consequatur modi esse ipsa neque magnam aperiam velit reiciendis quasi sunt voluptatum rem odit voluptatibus provident sint.</li>

      </ul>
      <br />
      <br />
      <hr />
      <main>
        <br />
        <Outlet />
      </main>
    </div>
  )
}

export default Artikallyout