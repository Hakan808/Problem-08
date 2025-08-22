// Statik değerleri alın ve prop'ları kullanarak dinamik hale getirelim.
// 1. Her bir form elementi için şu değerleri dinamik hale getirin:
//    - 'label id', 'label text', 'input placeholder', 'input type', 'input description' gibi değerleri prop olarak geçirilebilir yapın.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Her bir form elementi arasında daha fazla boşluk bırakmak için margin  kullanın.
//    - Input alanlarına hover sırasında bir border ekleyin ve odaklandığında daha belirgin bir renk kullanın.
// 3. App bileşeninde iki farklı form elementi kullanarak, birinciyi "Email", ikincisini "Password" olarak yapılandırın.

function FormInput({labelId,labelText,placeholder,type,desc}) {
  return (
    <div className='max-w-sm p-8 mb-20 border '>
      <label
        htmlFor={labelId}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {labelText}
      </label>
      <div className='mt-2'>
        <input
          id={labelId}
          name={type}
          type={type}
          placeholder={placeholder}
          className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 hover:border border-red-500'
        />
      </div>
      <p className='mt-2 text-sm text-gray-500'>
        {desc}
        
      </p>
    </div>
  )
}

export default function App() {
  return (
    <form className="flex flex-col justify-center items-center">
      <FormInput labelId="email" labelText="Email" placeholder="you@example.com" type="email" desc="Bunu sadece spam için kullanacağız."/>
      <FormInput labelId="name" labelText="Password" placeholder="Password giriniz" type="Password" desc="Password kısmını doldurmak zorunludur"/>
    </form>
  )
}
