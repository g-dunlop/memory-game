# Memory Game App
<h2><a href=""> Link to working site </a></h2>

<section class="section about">
<h2 class="h2">About</h2>
<p class="p">This was a 2-day individual project I worked on at the end of week 7 of the CodeClan course.  It's based on a toy called 'Simon', which ~I had when I was younger.  I chose to make this project to consolidate React and MongoDB and to challenge myself with a project that required some game logic.  As I learned new things on the course, such as UseContext, React Modal, I applied them to this project as a way of practicing them.
</section>


 <section class="section screenshots">
 <h2 class="h2">Screenshots</h2>
<p class="p">For a short video preview of the app, please visit my  <a href="https://g-dunlop.github.io/g-dunlop-portfolio-website/">portfolio site</a>:
<table class="table">
  <tr class="tr">
    <td class="td"><img class="img" width="1280" alt="MemoryGame_1" src="https://user-images.githubusercontent.com/88304522/167289190-169641ed-254f-462b-ad9d-b1589e008c72.png"></td>
  <td class="td"><img class="img" width="1280" alt="MemoryGame_2" src="https://user-images.githubusercontent.com/88304522/167289203-01c0eabb-7249-467c-883e-489bbb70f4ab.png"></td>
  </tr>
  <tr class="tr">
    <td class="td"><img class="img" width="1280" alt="MemoryGame_3" src="https://user-images.githubusercontent.com/88304522/167289211-2289404c-bfec-4e33-8527-fab40c2d7001.png"></td>
    <td class="td"><img class="img" width="1280" alt="MemoryGame_4" src="https://user-images.githubusercontent.com/88304522/167289219-3d682d89-f6fd-46b7-bbf1-5f36e4fe0502.png"></td>
  </tr>
 </table>
</section>


<section class="section tools">
<h2 class="h2">Tools</h2>

<ul class="ul">
  <li class="li">React</li>
  <li class="li">Express</li> 
  <li class="li">Node.js</li> 
  <li class="li">Mongo DB</li>
 </ul>
</section>

<section class="section how-to-run">
<h2 class="h2">How to Run</h2>
<ol class="ol">
  <li class="li">clone repository to your computer</li>
  <li class="li">cd server</li>
  <li class="li">npm install</li>
  <li class="li">Get mongod up and running.  The following terminal commands work for me if you're not sure how:
    <ul class="ul">
      <li class="li">sudo mkdir -p /System/Volumes/Data/data/db</li>
      <li class="li">sudo chown -R `id -un` /System/Volumes/Data/data/db</li>
      <li class="li">--dbpath /System/Volumes/Data/data/db</li>
    </ul>
    </li>
  <li class="li">npm run seeds</li>
  <li class="li">npm run server:dev</li>
  <li class="li">cd ../client</li>
  <li class="li">npm install</li>
  <li class="li">npm start</li>
</ol>
</section>

 <section class="section learned">
 <h2 class="h2">What I learned</h2>
<ul class="ul">
  <li class="li">I got some good practice with useEffect on this project, particularly with the animation of the squares lighting up.</li>
  <li class="li">I also, got some good practice with useState and game logic, particularly in handling the user input during the game itself.</li>
  <li class="li">I just had a crack at this without any planning and it affected the design and my ability to change things up later.</li>
 </ul>
 </section>

<section class="section differently">
 <h2 class="h2">What we would do differently</h2>
<ul class="ul">
  <li class="li">Plan!  At least do some wireframing for a small personal project.</li>
  <li class="li">Maybe by the time anybody reads this, I'll have learned how to use authentication to stop duplicate names entering the database.</li>
  <li class="li">If I get time, I'd like to add a 'High Scores' section so the user can see how they compare to the top scores.</li>
</ul>
</section>


