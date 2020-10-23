document.getElementById('check').addEventListener('click', () => {
    var bxh = [{
            name: "Ars",
            point: 99,
            GD: 45
        },
        {
            name: "Che",
            point: 25,
            GD: 39
        },
        {
            name: "Man",
            point: 60,
            GD: 29
        },
        {
            name: "Liv",
            point: 88,
            GD: 39
        },
    ]

    // bxh[0].position = 3
    // console.log(bxh[0])
    arr = []
    for (i = 0; i < bxh.length; i++) {
        arr.push(bxh[i].point)
    }
    var sorted = arr.slice().sort(function(a, b) { return b - a })

    var ranks = arr.map(function(v) {
        return sorted.indexOf(v) + 1
    });

    bxh.forEach(themvao)
    console.log(bxh)

    function themvao() {
        for (i = 0; i < bxh.length; i++) {
            bxh[i].position = ranks[i]
        }
    }
})