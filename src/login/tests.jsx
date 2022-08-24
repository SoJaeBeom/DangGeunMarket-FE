import { useForm } from "react-hook-form";




function SignUp({
  onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  }
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors }
  } = useForm();
  console.log(isDirty);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">아이디</label>
      <input
        id="id"
        type="text"
        placeholder="아이디를 입력해주세요."
        aria-invalid={!isDirty ? undefined : errors.id ? "true" : "false"}
        {...register("id", {
          required: "아이디는 필수 입력입니다.",
          pattern: {
            value: /^[A-Za-z0-9+]{5,}$/,
            message: "아이디 형식에 맞지 않습니다."
          }
        })}
      />
      {errors.id && <small role="alert">{errors.id.message}</small>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
        {...register("password", {
          required: "비밀번호는 필수 입력입니다.",
          minLength: {
            value: 8,
            message: "8자리 이상 비밀번호를 사용하세요."
          }
        })}
      />
      {errors.password && <small role="alert">{errors.password.message}</small>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}

export default SignUp;






function constructor(){
    
  this.state = {
  user_id: "",
  nick_name: "",
  usableId : false
}
} 
const idCheck = (e) => {
const {usebleId} = this.state;
fetch("http://54.180.2.97/user/signup/usercheck", {
  method: "POST",
  headers: {
    "Content-Type" : "application/json"
  },
  body: JSON.stringify({user_id: this.state.user_id})

})
.then(response => {if(response.status === 200){
  alert("사용 가능한 아이디 입니다.");// 백엔드로 보낸 데이터 결과 200 일 경우
  this.setState({usable_id: true})//사용 가능한 아이디 일 경우 state상태에 true값으로 변경, 나중에 회원가입 버튼 클릭 이벤트핸들러에 필요!
}else if(response.status === 409){
  alert("이미 사용중인 아이디 입니다.") // 이미 데이터베이스에 있는 아이디일 경우 409
}else{ // 그 외에는 사용 불가한 아이디
  alert("사용 불가한 아이디입니다.")
}
})
}
const inputId = (e) => {
this.setState({
     user_id : e.target.value    
  })
}
