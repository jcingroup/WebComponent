var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({

    getInitialState: function () {

        this.tid = 0;

        return {
            inputValue: null,
            keyword: null,
            visibility: 'hidden',
            tid: null
        };
    },
    onChange: function (e) {
        var v = e.target.value;
        if (v.trim() != '') {

            this.setState({
                keyword: v,
                visibility: 'visible'
            });

            var _this = this;
            var f = function () { _this.getData(v) };
            console.log('before tid', this.tid);
            if (this.tid == 0) {
                this.tid = setTimeout(f, 500);
            }
            console.log('after tid', this.tid);
        } else {
            this.setState({
                keyword: v,
                visibility: 'hidden'
            });
        }
    },
    onClickItem: function (v, e) {
        this.setState({ keyword: v, visibility: 'hidden' });
    },
    getData: function (m) {
        clearTimeout(this.tid);
        this.tid = 0;
    },
    render: function () {
        var st = { visibility: this.state.visibility };
        return (
        <div>
            <input type="text" value={this.state.keyword} onChange={this.onChange} />
            <ul style={st}>
                <li><a href="#" onClick={this.onClickItem.bind(this,'A')}>A Item</a></li>
                <li><a href="#" onClick={this.onClickItem.bind(this,'B')}>B Item</a></li>
                <li><a href="#" onClick={this.onClickItem.bind(this,'C')}>C Item</a></li>
            </ul>
        </div>
        );
    }
});

var mountNode = document.getElementById("context");
ReactDOM.render(<HelloMessage />, mountNode);