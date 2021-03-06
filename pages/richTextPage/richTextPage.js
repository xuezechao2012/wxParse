const md =  '# 我是一级标题\n' + 
            '## 我是二级标题\n' +
            '### 我是三级标题\n' +
            '[**Showdown**](http://www.showdownjs.com) is *great*\n' +
            '\nbecause:\n' +
            ' - it\'s easy to use\n' +
            ' - it\'s extensible\n' +
            ' - works in the server and in the browser';
 
const html = `
  <div style="margin: 10px 0 10px;">
    <b>* 字体标签</b>
  </div>
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>

  <div style="margin: 10px 0 10px;">
    <b>* video标签</b>
  </div>
  <video src="https://ugccsy.qq.com/uwMROfz2r57EIaQXGdGnC2dePkZaz9nvINvy8qtBz-4opyj0/szg_4117_50001_0b6boeaboaaagaaod27ggzpfc4odc5yqaf2a.f622.mp4?sdtfrom=v1010&guid=a4757c60e5f02cd98e0146e0a81b5fd7&vkey=388C92E9252109A79FB55DB9FCEF07EC74FFC2E3C4E4DF098CA5A543EA40FB00E72C25D78D7738A11D32B338A122043D626FF914C279C81173CCF39EFBED328302BFB6B5AE0DEFAB28833AA5BD003047AB041E6CE05F045DCF9FD6E7693D4D039296CC22518B2A372F99552B19957D9F0B57C19EF99901039218D25A2D591843"></video>

  <div style="margin: 10px 0 10px;">
    <b>* audio标签</b>
  </div>
  <audio title="我是标题" desc="我是小标题" src="https://media.lycheer.net/lecture/25840237/5026279_1509614610000.mp3?0.1"></audio>

  <div style="margin: 10px 0 10px;">
  <b>一. 转义字符</b>
  </div>&lt;div style=&quot;color:red&quot;&gt;我是转义字符&lt;/div&gt; 

  <div style="margin: 10px 0 10px;">
  <b>二. a标签跳转</b>
  </div> 
  <a href="https://www.baidu.com" target="_blank">a标签跳转</a>&nbsp; 

  <div style="margin: 10px 0 10px;">
  <b>三. 内联标签</b>
  </div> 
  <span style="background-color: rgb(139, 170, 74);">我是内联标签</span>
  <br />
  <p></p>
  <p></p>

  <div style="margin: 10px 0 10px;">
  <b>四. ul无序列表</b>
  </div>
  <ul>
  <li style="text-align: center;"><span style="background-color: rgb(139, 170, 74);">1</span></li>
  </ul>

  <div style="margin: 10px 0 10px;">
  <b>五. ol有序列表</b>
  </div>
  <ol>
  <li style="text-align: center;"><span style="background-color: rgb(139, 170, 74);">test</span></li>
  <li><span style="background-color: rgb(139, 170, 74);">test2</span></li>
  </ol>

  <div style="margin: 10px 0 10px;">
  <b>六. 表格渲染</b>
  </div>
  <table>
    <tr>
      <th>标题1</th>
      <th>标题2</th>
      <th>标题3</th>
      <th>标题4</th>
      <th>标题5</th>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td>cell3</td>
      <td>cell4</td>
      <td>cell5</td>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td>cell3</td>
      <td>cell4</td>
      <td>cell5</td>
    </tr>
  </table>

  <div style="margin: 10px 0 10px;">
  <b>七. 图片渲染</b>
  </div>
  <p><img src="https://dev-sit-1251698455.cos.ap-guangzhou.myqcloud.com/ds/22/363/20200401/3c9e7798e3204756b9e0f3263882b81f.jpeg" /><img src="https://mmbiz.qpic.cn/mmbiz_png/1gmcynicwloGkVMTr6wTHdDXlFUSaSxOSRELianAFGJYVzvXJKoM2xbbFMqKe6ONy5zoHHejNbibTJn5gdEOc1aIA/0?wx_fmt=png" /></p>
`

Page({
  data: {
    htmlText: html,
    mdText: md,
  },

  handleTagATap(url) {
    console.log(url)
  }
})