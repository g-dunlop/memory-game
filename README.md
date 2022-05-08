# Memory Game App
<h2><a href=""> Link to working site </a></h2>

<h2>About:</h2>
<p>This was a 2-day individual project I worked on at the end of week 7 of the CodeClan course.  It's based on a toy called 'Simon', which ~I had when I was younger.  I chose to make this project to consolidate React and MongoDB and to challenge myself with a project that required some game logic.  As I learned new things on the course, such as UseContext, React Modal, I applied them to this project as a way of practicing them.

<h2>Screenshots: </h2>
<table>
  <tr>
    <td><img width="1280" alt="MemoryGame_1" src="https://user-images.githubusercontent.com/88304522/167289190-169641ed-254f-462b-ad9d-b1589e008c72.png"></td>
  <tr><img width="1280" alt="MemoryGame_2" src="https://user-images.githubusercontent.com/88304522/167289203-01c0eabb-7249-467c-883e-489bbb70f4ab.png"></tr>
  </tr>
  <tr>
    <td><img width="1280" alt="MemoryGame_3" src="https://user-images.githubusercontent.com/88304522/167289211-2289404c-bfec-4e33-8527-fab40c2d7001.png"></td>
    <td><img width="1280" alt="MemoryGame_4" src="https://user-images.githubusercontent.com/88304522/167289219-3d682d89-f6fd-46b7-bbf1-5f36e4fe0502.png"></td>
  </tr>
 </table>

<h2>Tools:</h2>

<ul>
  <li>React</li>
  <li>Express</li> 
  <li>Node.js</li> 
  <li>Mongo DB</li>
 </ul>


<h2>How to run:</h2>
<ol>
  <li>clone repository to your computer</li>
  <li>cd server</li>
  <li>npm install</li>
  <li>Get mongod up and running.  The following terminal commands work for me if you're not sure how:
    <ul>
      <li>sudo mkdir -p /System/Volumes/Data/data/db</li>
      <li>sudo chown -R `id -un` /System/Volumes/Data/data/db</li>
      <li>--dbpath /System/Volumes/Data/data/db</li>
    </ul>
    </li>
  <li>npm run seeds</li>
  <li>npm run server:dev</li>
  <li>cd ../client</li>
  <li>npm install</li>
  <li>npm start</li>
</ol>


<h2>What I learned</h2>
<ul>
  <li>I got some good practice with useEffect on this project, particularly with the animation of the squares lighting up.</li>
  <li>I also, got some good practice with useState and game logic, particularly in handling the user input during the game itself.</li>
  <li>I just had a crack at this without any planning and it affected the design and my ability to change things up later.</li>
 </ul>

<h2>What I would do differently</h2>
<ul>
  <li>Plan!  At least do some wireframing for a small personal project.</li>
  <li>Maybe by the time anybody reads this, I'll have learned how to use authentication to stop duplicate names entering the database.</li>
  <li>If I get time, I'd like to add a 'High Scores' section so the user can see how they compare to the top scores.</li>
</ul>


