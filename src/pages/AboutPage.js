import '../App.css'

function AboutPage() {
  return (
    <div className="AboutPage bg-rose-700 justify-center p-3 h-screen">
      <div className=" w-full lg:max-w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: 'url(https://picsum.photos/id/1050/200/200)',
          }}
          title="Background"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              Splash Photography 📷
            </div>
            <p className="text-gray-700 text-base">
              This is a smallcase photography website inspired from Unsplash
              Website. We bring to you mesmerizing unsplash images using the
              Lorem Picsum API. For the git repository of this project visit the
              link below.
            </p>
            <a
              href="https://github.com/Siddhartha-Padhy/splash"
              className="text-blue-600 hover:text-rose-700"
            >
              <i class="fa fa-github" aria-hidden="true"></i>&nbsp;Github
            </a>
          </div>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src="https://picsum.photos/id/237/50/50"
              alt="Avatar of Writer"
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Siddhartha Padhy</p>
              <p className="text-gray-600">@windigo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
