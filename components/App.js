import React from 'react'
import AddItem from '../containers/AddItem/';
import VisibleItemsList from '../containers/VisibleItemsList';
import Modal from '../containers/Modals/Modal';

require('../src/sass/style.scss');

const App = () => (
    <div>
        <div className="section-items-list">
            <div className="container">
                <AddItem/>

                <h3>Items list</h3>
                <VisibleItemsList/>
            </div>
        </div>

        <Modal/>

    </div>
)

export default App
