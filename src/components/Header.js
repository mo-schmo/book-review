import React, { Component, useState } from 'react';
import '../stylesheets/Header.scss'
import '../stylesheets/theme.scss'
import { GiBookshelf, GiToggles } from 'react-icons/gi'
import {BsToggleOn, BsToggleOff} from 'react-icons/bs'
 
const Header = () => {

    const [theme, setTheme] = useState('dark');
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        alert(search)
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <GiBookshelf size="2em"/>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex" onSubmit={handleSearch}>
                    <input class="form-control me-2" type="search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;