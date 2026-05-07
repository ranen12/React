import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterslice'
import { changeName } from './userslice';
import type { RootState } from './store';

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const name = useSelector((state: RootState) => state.user.name);
    const dispatch = useDispatch();
return (
<div>
<h1>{name}</h1>
<h1>{count}</h1>
<button onClick={() => dispatch(increase())}>증가</button>
<button onClick={() => dispatch(decrease())}>감소</button>
<button onClick={() => dispatch(changeName('차은우'))}>이름변경</button>
</div>
);
}