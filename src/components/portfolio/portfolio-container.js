import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                {title: "Quip", category: "eCommerce" }, 
                {title: "Eventbright", category: "Scheduling"}, 
                {title: "Ministry Safe", category: "Enterprise"}, 
                {title: "SwingAway", category: "eCommerce" }
            ]
        };   

        this.handelFilter = this.handelFilter.bind(this);
    }

    handelFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} anyprop={"any prop"} />;
        });
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handelFilter('eCommerce')}>eCommerce</button>
                <button  onClick={() => this.handelFilter('Scheduling')}>Scheduling</button>
                <button  onClick={() => this.handelFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}

            </div>
        );
    }
}