import React from 'react';
import AllTables from '../../components/Table/AllTables';
import Sidebar from '../../components/sidebar/Sidebar';
import './Style.css';



class selectTables extends React.Component {
render (){
    return (
    <div>
        <Sidebar />
        <p className="title">Mesas</p>
        <AllTables />
    </div>
    );

}
}
export default selectTables;