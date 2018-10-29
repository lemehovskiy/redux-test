import React from 'react'
import AddNewPost from '../containers/AddNewPost/';
import ItemsList from '../containers/ItemsList';
import Modal from '../containers/Modals/Modal';

require('../src/sass/style.scss');

const App = () => (
    <div>
        <div className="section-items-list">
            <div className="container">
                <AddNewPost/>

                <h3>Items list</h3>
                <ItemsList/>
            </div>
        </div>

        <Modal/>

    </div>
)

export default App
