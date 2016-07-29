function question1() {
    target = document.getElementById("output1");
    target.innerHTML = "画像をこのHTMLと同じフォルダにsample.jpgという名前で保存します。&ltimg src=”sample.jpg”>で画像を読み込みます。src=”○○”　この○○の部分には相対パスを書きます。";
    }

function question2() {
    target = document.getElementById("output2");
    target.innerHTML = "&lta href=”GoogleのURL”>と&lt/a>で挟んだ部分がGoogleのページへのリンクになります。GoogleのURLは　http://www.google.com";
    }

function question3() {
    target = document.getElementById("output3");
    target.innerHTML = "&lta href=”Topページへの相対パス”>と&lt/a>で挟んだ部分がGoogleのページへのリンクになります。Topページへの相対パスは　index.html";
    }

function question4() {
    target = document.getElementById("output4");
    target.innerHTML = "iframe（アイフレーム）の埋め込みを使おう！Youtubeの「共有」から「埋め込みコード」をコピーしてソースに貼り付けよう♪";
    }
    