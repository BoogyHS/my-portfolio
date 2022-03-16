import Footer from 'components/Footer';
import AddTodo from 'components/AddTodo';
import VisibleTodoList from 'components/VisibleTodoList';

const App = () => {
    return (
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    );
}

export default App;
