    var a = [1, 2, 3, 4, "A"]
    var b = [1, 2, 3, 4, "B", "D", "C"]
    let arr = []
    let arr1 = []
    for (i = 0; i < b.length; i++) {
        if (!a.includes(b[i])) {
            arr.push(b[i])
        }
    }
    for (j = 0; j < a.length; j++) {
        if (!b.includes(a[j])) {
            arr1.push(a[j])
        }
    }
    document.getElementById('lbl').innerHTML = "Dãy A: " + a + "<br>" + "Dãy B: " + b

    document.getElementById('ketqua').innerHTML = "<br>" + "Kết quả : " + arr.join(' , ') + ' , ' + arr1.join(',')
    console.log(arr.join(' , ') + ' , ' + arr1.join(','))