import {Component} from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import PageImage from './components/PageImage';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    render() {
        return (
          <div className="app-container">
            <Navbar />
            <div className="page-container">
              <Header title="Sheep Shearer" />
              <SubHeader title="How to Begin" description="Speak to Fred the Farmer at his sheep farm, found slightly north of the Lumbridge Castle. Ask about a quest, and he will task you with bringing him 20 balls of wool." />
              <MainContent title="Introduction" description="Like Cook's Assistant, this quest is designed to help players explore the starting area of Lumbridge. New players are encouraged to follow the steps below to explore different parts of the town; however, collecting and spinning the wool are optional, as the balls of wool are tradeable between players and sold in stores. The fastest way to complete the quest is to simply buy 20 balls of wool from the Grand Exchange and then give them to Fred." />
              <div className="sub-section">
                <MainContent title="Obtaining the Wool" description='Enter the fenced area containing sheep, connected to the east side of his house. The spinning wheel on the 2nd floor of Lumbridge Castle. Shear the sheep, either by selecting the "shear" option on the sheep, or right-clicking the shears and selecting "use," then clicking the sheep to use the shears on them directly.' />
                <PageImage image="/sheep-one.png" alt="Wool" />
              </div>
              <div className="sub-section">
                <PageImage image="/sheep-two.png" alt="Balls of Wool" />
                <MainContent title="Spinning the Wool" description='Once you have 20 pieces of wool, you now need to spin them into balls of wool. Go to the 2nd floor of the Lumbridge Castle, and find the bedroom on the south end of the castle. Inside is a spinning wheel; click on the wheel with the wool in your inventory to spin your wool into balls.' />
              </div>
              <MainContent title="Finish the Quest" description='Once you have 20 balls of wool, you can now return to Fred the Farmer. Speak to him again, and he will give you a reward. You will also receive a commendation from the King of Lumbridge.' />
              <div className="button-container">
                <button>
                  <a href="https://oldschool.runescape.wiki/w/Sheep_Shearer">
                    Consult the Official OSRS Wiki
                  </a>
              </button>
              </div>
              <Footer />
            </div>
          </div>
        )
    }
}

export default App;
