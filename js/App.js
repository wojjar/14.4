var movies = [
  {
      id: 1,
      title: 'Harry Potter',
      desc: 'Film o czarodzieju',
      src:'http://1.fwcdn.pl/po/57/46/95746/7127916.2.jpg'
  },
  {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      src:' http://1.fwcdn.pl/po/68/78/6878/6999844.2.jpg'
  },
  {
      id: 3,
      title: 'Platoon',
      desc: 'Film wojenny',
      src:'http://1.fwcdn.pl/po/10/68/1068/7679716.2.jpg'
  },
  {
      id: 4,
      title: 'Star Wars',
      desc: 'Film sci-fi',
      src:'http://1.fwcdn.pl/po/10/49/671049/7790359.2.jpg'
  },
  {
      id: 5,
      title: 'Piła',
      desc: 'Horror',
      src:'http://1.fwcdn.pl/po/14/13/121413/6924617.2.jpg'
  }
];
   
var Movie = React.createClass({
  render: function() {
    return (
        React.createElement('div',{}, 
        React.createElement(MoviesList, {items:movies}, {})
      )
    );
  }
});

var MoviesList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },
  render: function() {
    var movies = this.props.items.map(function(X) {
        return React.createElement(MovieDescription, {item: X, key: X.id});
    });
    return (
      React.createElement('ul', {},movies)
    );
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
        React.createElement('div', {},
        React.createElement('p', {className: 'movie'}, 'Tytuł: ' + this.props.item.title),
        React.createElement('p', {className: 'movie'}, 'Opis: ' + this.props.item.desc),
        React.createElement('img', {className: 'Image',src: this.props.item.src})
      )
    )
  },
});

var app = React.createElement(Movie);
ReactDOM.render(app, document.getElementById('app'));