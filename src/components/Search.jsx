import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	};

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.jopa(`${this.state.search}`);
		}
	};
	handleFilter = (event) => {
		this.setState(() => ({ type: event.target.dataset.type }), () => {
			this.props.jopa(this.state.search, this.state.type);

		});
	};

	render() {
		return (
			<div className='row'>
				<div className='col s12'>
					<div className='input-field'>
						<input
							className='validate'
							placeholder='search'
							type='search'
							value={this.state.search}
							onChange={(e) => this.setState({ search: e.target.value })}
							onKeyDown={this.handleKey}
						/>
						<button
							className='blue-grey darken-3 btn search-btn'
							onClick={() =>
								this.props.jopa(this.state.search, this.state.type)
							}
						>
							искать
						</button>
						<form action='#' className='choose-cat'>
							<p>
								<label>
									<input
										className='with-gap'
										name='type'
										type='radio'
										data-type='all'
										onChange={this.handleFilter}
										checked={this.state.type === 'all'}
									/>
									<span>All</span>
								</label>
							</p>
							<p>
								<label>
									<input
										className='with-gap'
										name='type'
										type='radio'
										data-type='movie'
										onChange={this.handleFilter}
										checked={this.state.type === 'movie'}
									/>
									<span>Only movies</span>
								</label>
							</p>
							<p>
								<label>
									<input
										className='with-gap'
										name='type'
										type='radio'
										data-type='series'
										onChange={this.handleFilter}
										checked={this.state.type === 'series'}
									/>
									<span>Only series</span>
								</label>
							</p>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export { Search };
