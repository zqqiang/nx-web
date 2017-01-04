let fetch = require('node-fetch');

let values = [{
    vote_id: 4665,
    item_idx_list: {
        item_idx: [0]
    }
}];

let _data = {
    _id: '1',
    _mid: '2651111010',
    action: 'vote',
    __biz: 'MzA4NDIyNjYxOA==',
    uin: '',
    key: '',
    pass_ticket: '',
    f: 'json',
    json: JSON.stringify({
        "super_vote_item": values,
        "super_vote_id": 466519382
    })
};

fetch('http://mp.weixin.qq.com/mp/newappmsgvote', {
    method: 'POST',
    body: JSON.stringify(_data),
    headers: {
        'Content-Type': 'application/json',
    },
}).then(function(res) {
    return res.json();
}).then(function(json) {
    console.log(json);
});
