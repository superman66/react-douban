import React, { Component, PropTypes } from 'react';
import Loading from '../Loading'
import GoBackBar from '../GoBackBar'

class MovieView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentWillMount() {
    const { fetchData, params } = this.props;
    fetchData(params.id);
  }
  componentWillUpdate(nextProps) {
    if (nextProps.data !== this.props.data) {
      console.log('data: ' + nextProps.data);
      const data = { ...nextProps.data };
      this.setState({ data });
    }
  }
  renderMeta() {
    const { data } = this.props;
    let cast = data.casts.reduce((name, value) => {
      return name ? name + ' / ' + value.name : value.name;
    }, '');
    return (
      <div>
        {data.countries.join(' / ') + ' / ' + data.genres.join(' / ') + ' / ' + data.directors[0].name + '(导演) / ' + cast}
      </div>
    );
  }
  renderOriginTitle() {

  }

  render() {
    const { loading, hasError } = this.props;
    const { data } = this.state;
    console.log('data:....' + data);
    // if (loading) {
    //   return <Loading show={loading} />
    // }
    return (
      data.title ? <div>
        <GoBackBar goBack={this.props.router.goBack} title={data.title} />
        <div className="image-wrap" style={{ backgroundImage: 'url(' + data.images.large + ')' }}></div>


        <div className="title-border">
          <div className="title-info">
            <div className="title-image">
              <img src={data.images.large} />
            </div>
            <div className="title-text">
              <p>{data.title}</p>
              <p>{data.rating.average}</p>
            </div>
          </div>
        </div>

        <div className="info">
          {this.renderMeta()}
          {/*<p className="info-content"><span className="info-title">原名</span><span className="info-text">{data.aka[0]}</span></p>
          <p className="info-content"><span className="info-title">类型</span><span className="info-text">{data.genres}</span></p>
          <p className="info-content"><span className="info-title">年代</span><span className="info-text">{data.year}</span></p>
          <p className="info-content"><span className="info-title">地区</span><span className="info-text">{data.countries}</span></p>
          <p className="info-content"><span className="info-title">又名</span><span className="info-text">{data.aka}</span></p>
          <p className="info-content"><span className="info-title">想看人数</span><span className="info-text">{data.wish_count}</span></p>
          <p className="info-content"><span className="info-title">看过人数</span><span className="info-text">{data.collect_count}</span></p>
          <p className="info-content"><span className="info-title">评分人数</span><span className="info-text">{data.ratings_count}</span></p>
          <p className="info-content"><span className="info-title">短评数量</span><span className="info-text">{data.comments_count}</span></p>
          <p className="info-content"><span className="info-title">影评数量</span><span className="info-text">{data.reviews_count}</span></p>*/}
        </div>


        <div className="summary">{data.summary}</div>
      </div>
        : null
    )
  }
}

MovieView.propTypes = {
  loading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}
export default MovieView;