import Header from './Header';
import TopContainer from './TopContainer';
import BookContainer from './BookContainer';

function MainContainer() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <TopContainer />
        <BookContainer />
      </div>
    </>
  );
}

