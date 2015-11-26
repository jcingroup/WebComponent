var HelloMessage = React.createClass({

    getInitialState: function () {
        this.tid = 0;
        return {
            inputValue: null,
            keyword: null,
            visibility: 'hidden',
            tid: null,
            limitNumber: 5,
            all_list: ['A Item', 'B Item', 'C Item', 'D Item', 'E Item', 'F Item',
                       'G Item', 'H Item', 'I Item', 'J Item', 'K Item', 'L Item',
                       'M Item', 'N Item', 'O Item', 'P Item', 'Q Item', '中文'],
            list: []
        };
    },
    onChange: function (e) {
        var v = e.target.value;
        if (v.trim() != '') {
            var count = 1, limitTo = this.state.limitNumber;
            var filter_list = this.state.all_list.filter(function (val) {
                if (count <= limitTo) {
                    if ((val.toUpperCase()).match(v.toUpperCase()) != null) {
                        count++;
                        return true;
                    } else {
                        return false;
                    }
                } else { return false; }
            });

            this.setState({
                keyword: v,
                list: filter_list
            });

            var _this = this;
            var f = function () { _this.getData(v) };
            console.log('enter', new Date());
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
                {
                this.state.list.map(function(itemData,i) {
                return (
                <li key={i}><a href="#" onClick={this.onClickItem.bind(this,itemData)}>{itemData}</a></li>);
                }.bind(this))
                }
            </ul>
        </div>
        );
    }
});

var mountNode = document.getElementById("context");
ReactDOM.render(<HelloMessage />, mountNode);