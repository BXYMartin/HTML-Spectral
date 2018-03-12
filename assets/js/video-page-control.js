var prenum = 1;
  function page(num){
    switch (num) {
      case 0:
        num = 1;
      case 1:
      var divider = (function () {/*
        <ul>
          <li><a onclick="page(prenum-1)"></a></li>
          <li class="active"><a onclick="page(1)"></a></li>
          <li><a onclick="page(2)"></a></li>
          <li><a onclick="page(3)"></a></li>
          <li><a onclick="page(4)"></a></li>
          <li><a onclick="page(prenum+1)"></a></li>
        </ul>
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
      var html = (function () {/*
        <hr />
        <section>
          <h2>大学军训纪实</h2>

          <p>这是一个大学新生军训的纪实视频。</p>

        </section>
        <iframe id="video" width="100%" height="100%" frameborder="0" onload="this.height=(0.507)*document.body.clientWidth;" src="http://player.youku.com/embed/XMTcxODkwMDk1Mg" allowfullscreen=""></iframe>
        <hr />
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
        break;
      case 2:
      var divider = (function () {/*
        <ul>
          <li><a onclick="page(prenum-1)"></a></li>
          <li><a onclick="page(1)"></a></li>
          <li class="active"><a onclick="page(2)"></a></li>
          <li><a onclick="page(3)"></a></li>
          <li><a onclick="page(4)"></a></li>
          <li><a onclick="page(prenum+1)"></a></li>
        </ul>
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
      var html = (function () {/*
        <hr />
        <section>
          <h2>运动会照片集锦</h2>

          <p>用照片记录参赛者们的精彩表现！</p>

        </section>
        <iframe id="video" width="100%" height="100%" frameborder="0" onload="this.height=(0.507)*document.body.clientWidth;" src="http://player.youku.com/embed/XMTM1MDcyMjMyMA" allowfullscreen=""></iframe>
        <hr />
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
        break;
      case 3:
      var divider = (function () {/*
        <ul>
          <li><a onclick="page(prenum-1)"></a></li>
          <li><a onclick="page(1)"></a></li>
          <li><a onclick="page(2)"></a></li>
          <li class="active"><a onclick="page(3)"></a></li>
          <li><a onclick="page(4)"></a></li>
          <li><a onclick="page(prenum+1)"></a></li>
        </ul>
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
      var html = (function () {/*
        <hr />
        <section>
          <h4>北京航空航天大学军训纪实</h4>

          <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>. Finally, <a href="#">this is a link</a>.</p>

        </section>
        <iframe id="video1" width="100%" height="100%" frameborder="0" onload="this.height=(0.507)*document.body.clientWidth;" src="http://player.youku.com/embed/XMTcxODkwMDk1Mg" allowfullscreen=""></iframe>
        <hr />
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
        break;
      case 5:
        num = 4;
      case 4:
      var divider = (function () {/*
        <ul>
          <li><a onclick="page(prenum-1)"></a></li>
          <li><a onclick="page(1)"></a></li>
          <li><a onclick="page(2)"></a></li>
          <li><a onclick="page(3)"></a></li>
          <li class="active"><a onclick="page(4)"></a></li>
          <li><a onclick="page(prenum+1)"></a></li>
        </ul>
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
      var html = (function () {/*
        <hr />
        <section>
          <h4>北京航空航天大学军训纪实</h4>

          <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
          This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
          This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>. Finally, <a href="#">this is a link</a>.</p>

        </section>
        <iframe id="video1" width="100%" height="100%" frameborder="0" onload="this.height=(0.507)*document.body.clientWidth;" src="http://player.youku.com/embed/XMTcxODkwMDk1Mg" allowfullscreen=""></iframe>
        <hr />
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
        break;
      default:
      var html = (function () {/*
        <hr />
          <h4>页面出错，请刷新后重试！</h4>
        <hr />
  */}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];
    }
    document.getElementById("divider").innerHTML=divider;
    document.getElementById("content").innerHTML=html;
    prenum = num;
  }

  // 当窗口高宽改变时触发
  $(window).resize(function () {
  	// 取窗口改变后的高度和宽度
  	document.getElementById("video").height = (0.507)*document.body.clientWidth;
  });
