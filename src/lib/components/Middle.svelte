<script>
</script>

<div class="centerPane h-full w-full flex flex-col justify-start align-middle py-5 gap-6 px-10">
  <div class="search-bar relative w-full text-gray-400 focus-within:text-gray-400 h-10">
          <span class="absolute top-[0.3rem] left-2 flex items-center pl-2">
            <button
              type="submit"
              class="focus:shadow-outline p-1 focus:outline-none"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            name="q"
            class="w-full rounded-xl bg-transparent py-2 pl-10 text-sm text-white focus:bg-blue-200 focus:text-black focus:outline-none border-2 border-gray-300"
            placeholder="Search by products..."
            autoComplete="off"
          />
  </div>
  <div class="bg-blue-500 rounded-xl p-4 flex flex-col gap-4 items-start">
    <h1 class="text-white font-bold text-3xl">Welcome Vinay</h1>
    <p class="text-white font-extralight">Do commodo mollit nostrud nisi velit reprehenderit aute elit qui. Eu excepteur in eu qui ipsum ullamco culpa in esse reprehenderit ipsum in consequat exercitation. Reprehenderit qui ea non labore id quis ex.</p>
    <button class="rounded-xl text-black bg-white p-2 font-bold shadow-md hover:shadow-2xl">Plan a trip</button>
  </div>
  <div>
    <h1 class="font-bold text-xl">Details</h1>
    <div>
      <h1 class="text-gray-500 mt-5">Personal Details</h1>
      <div class="flex flex-row gap-6 mt-2 w-full">
        <input class="rounded-md py-2 px-3 w-full" type="text" placeholder="Name"
          />
        <input class="rounded-md py-2 px-3 w-full" type="text" placeholder="Gender"
          />
      </div>
      <div class="flex flex-row gap-6 mt-2 w-full">
        <input class="rounded-md py-2 px-3 w-full" type="text" placeholder="Mode of Transport"
          />
        <input class="rounded-md py-2 px-3 w-full" type="number" placeholder="Age"
          />
      </div>
    </div>
    <div>
      <h1 class="text-gray-500 mt-5">Travel Details</h1>
      <div class="flex flex-row gap-6 mt-2 w-full items-center">
        <input class="rounded-md py-2 px-3 w-full" type="text" placeholder="From place"
          />
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        <input class="rounded-md py-2 px-3 w-full" type="text" placeholder="To place"
          />
      </div>
      <div class="flex flex-row gap-6 mt-2 w-full items-center">
        <input class="rounded-md py-2 px-3 w-full" type="datetime" placeholder="Date start"
          />
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        <input class="rounded-md py-2 px-3 w-full" type="datetime" placeholder="Date end"
          />
      </div>
    </div>
  </div>
</div>

<style></style>
