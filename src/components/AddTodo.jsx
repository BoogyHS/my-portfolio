import { connect, useDispatch } from 'react-redux';
import * as todoActions from 'actions/todoActions';

const AddTodo = () => {
    const dispatch = useDispatch();
    let input;
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(todoActions.addTodo(input.value));
                input.value = '';
            }}>
                <input ref={(node) => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
