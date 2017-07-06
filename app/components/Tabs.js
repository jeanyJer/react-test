import React from 'react';
import { connect } from 'react-redux';
import TabOneList from './tabOneList';
import TabTwo from './tabTwo';
import { setChangeTab } from '../actions';

export class Tabs extends React.Component{
	constructor(){
		super()
	}
	
  
	check_title_index( index ){
		return index === this.props.currentIndex ? "tab_title active" : "tab_title"
	}

	check_item_index( index ){
		return index === this.props.currentIndex ? "tab_item show" : "tab_item"
	}

	render(){
		let _this = this;
		return(
			<div>
				<div className="tab_title_wrap">
					{ 
						this.props.tabNames.map((tabName, index) => {
							return(
								<div key={tabName} onClick={ () => { this.props.changeTab(index) } } className={ this.check_title_index( index ) }>{ tabName }</div>
							)	
						})
					}
				</div>
				<div className="tab_item_wrap">
					{ 
						this.props.tabNames.map((tabName, index) => {
							switch (index) {
								case 0:
								return	(
									<div key={tabName} className={ this.check_item_index(index) }><TabOneList /></div>
								);
								case 1:
									return (
									<div key={tabName} className={ this.check_item_index(index) }><TabTwo /></div>
								);
								default:
									return (
									<div key={tabName} className={ this.check_item_index(index) }>{'NO CONTENT'}</div>
								);
							}		
						})
					}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
  currentIndex: state.currentIndex,
  tabNames: state.tabNames
})

const mapDispatchToProps = {
  changeTab: setChangeTab
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)

