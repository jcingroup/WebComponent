var ReactTypeaheader = React.createClass({

    getInitialState: function () {
        this.tid = 0;
        return {
            inputValue: null,
            keyword: null,
            visibility: false,
            tid: null,
            data: [
                { value: 'a', text: 'A Item' },
                { value: 'b', text: 'B Item' },
                { value: 'c', text: 'C Item' },
            ],
            pointIndex: 0
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
            if (this.tid == 0) {
                this.tid = setTimeout(f, 500);
            }
        } else {
            this.setState({
                keyword: v,
                visibility: false
            });
        }
    },
    onClickItem: function (v, e) {
        this.setState({ keyword: v, visibility: false });
    },
    getData: function (m) {
        clearTimeout(this.tid);
        this.tid = 0;
        if (this.state.keyword.trim() == '') {
            this.setState({
                visibility: false
            });
        } else {
            this.setState({
                visibility: true
            });
        }
    },
    keyDown: function (e) {
        //ArrowDown 40
        //ArrowUp 38

        if (e.keyCode == 40) {
            if (this.state.pointIndex < this.state.data.length) {
                var new_pos = this.state.pointIndex + 1;
                var index_value = this.state.data[new_pos].value;
                this.setState({ pointIndex: new_pos, keyword: index_value });
            }
        }

        if (e.keyCode == 38) {
            if (this.state.pointIndex > 0) {
                var new_pos = this.state.pointIndex - 1;
                var index_value = this.state.data[new_pos].value;
                this.setState({ pointIndex: new_pos, keyword: index_value });
            }
        }

        if (e.keyCode == 13) {
            this.setState({ pointIndex: -1, visibility: false });
        }

        console.log('key down', e.key, e.keyCode);
    },
    render: function () {
        var out_selector = null;
        console.log(this.state.data);
        if (this.state.visibility) {
            out_selector = <Selector data={this.state.data} pointIndex={this.state.pointIndex} />;
        }
        return (
            <div id="main" className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-xs-2">Left</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" value={this.state.keyword}
                            onChange={this.onChange}
                            onKeyDown={this.keyDown} />
                        {out_selector}
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-xs-2">Left</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" value="下方元件" />
                    </div>
                </div>
            </div>
        );
    }
});


var Selector = React.createClass({

    getInitialState: function () {
        return {
        };
    },
    render: function () {
        return (
            <div className="typeahead-panel list-group">
                {
                this.props.data.map(function(item,i){
                if(this.props.pointIndex == i)
                {
                return (<Options setClass="list-group-item active" data={item} key={item.value} />);
                }
                else
                {
                return (<Options setClass="list-group-item" data={item} key={item.value} />);
                }
                }.bind(this))
                }
            </div>
        );
    }
});


var Options = React.createClass({

    getInitialState: function () {

        return {

        };
    },
    getDefaultProps: function () {
        return {
            setClass: 'list-group-item'
        };
    },

    render: function () {
        return (
            <a className={this.props.setClass} href="#">{this.props.data.text}</a>
        );
    }
});

var mountNode = document.getElementById("context");
ReactDOM.render(<ReactTypeaheader />, mountNode);