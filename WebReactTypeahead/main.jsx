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
                keyword: v
            });

            var _this = this;
            var f = function () { _this.getData(v) };
            console.log('enter',new Date());
            if (this.tid == 0) {
                this.tid = setTimeout(f, 500);
            } else {
                console.log('No Query', new Date());
            }

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

        console.log('clear', new Date());

        if (this.state.keyword.trim() == '') {
            this.setState({
                visibility: 'hidden'
            });
        } else {
            this.setState({
                visibility: 'visible'
            });
        }
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