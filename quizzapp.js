let url = "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
fetch(url)
    .then(function(res) {
        return res.json()
    })
    .then(function(res) {
        let dapan = ""
        let data = res.results
        let diem = 0
        let isOver = false
        document.getElementById("next").addEventListener("click", function() {
            data.shift()
            loadQuiz(data[0])
            document.getElementById("next").classList.add("hide")
        })

        function loadQuiz(quiz) {
            if (!quiz) {
                alert("Point: " + diem)
                document.getElementById('total').innerHTML = "Point: " + diem + ""
                return
            } else {
                isOver = false
                document.getElementById("question").innerHTML = quiz.question
                let choice = []
                dapan = quiz.correct_answer
                console.log(dapan)
                choice.push(quiz.correct_answer)
                choice.push(...quiz.incorrect_answers)
                choice.sort(function() {
                    return 0.5 - Math.random()
                })
                let alphabets = ['A', 'B', 'C', 'D']
                for (let i = 0; i < alphabets.length; i++) {
                    document.getElementById(`choice${alphabets[i]}`).innerHTML = choice[i]
                    document.getElementById(`choice${alphabets[i]}`).addEventListener("click", checkAns)
                    document.getElementById(`choice${alphabets[i]}`).parentNode.firstElementChild.classList.remove("fail")
                    document.getElementById(`choice${alphabets[i]}`).parentNode.firstElementChild.classList.remove("success")
                }
                console.log(quiz.question)

            }


        }

        function checkAns() {
            if (isOver == false) {
                if (dapan == this.innerHTML) {
                    this.parentNode.firstElementChild.classList.add("success")
                    alert("Right choice")
                    setTimeout(function() { data.shift(), loadQuiz(data[0]) }, 1000)
                    diem += 10
                } else {
                    this.parentNode.firstElementChild.classList.add("fail")
                    alert("Wrong choice")
                    setTimeout(function() { data.shift(), loadQuiz(data[0]) }, 1000)
                }

                // isOver = true
                // document.getElementById("next").classList.remove("hide")
            }
            document.getElementById('luudiem').innerHTML = "Điểm của bạn là: " + diem

        }

        loadQuiz(data[0])
    })