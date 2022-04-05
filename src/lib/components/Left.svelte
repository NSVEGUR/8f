<script>
</script>

<div
  class="left--pane w-full h-full bg-white flex flex-col justify-start align-middle"
>
  <img src="./logo.svg" alt="" class="h-14 my-6" />
  <div class="btns h-full w-full flex flex-col justify-start list-none">
    <li class=" ml-[40px] px-[20px] py-[15px] rounded-2xl mr-6 ">
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        /></svg
      >
      Dashboard
    </li>
    <li class="active ml-[40px] px-[20px] py-[15px] rounded-2xl mr-6">
      Explore
    </li>
    <li class="ml-[40px] px-[20px] py-[15px] rounded-2xl mr-6">My plans</li>
    <li class="ml-[40px] px-[20px] py-[15px] rounded-2xl mr-6">Settings</li>
  </div>
</div>

<style>
  div.btns li {
    /* background-color: #B8BED9; */
    border-color: #b8bed9;
    color: #6a7297;
    @apply font-medium;
    @apply flex justify-start align-middle;
  }

  div.btns li.active {
    background-color: #4062ff;
    color: white;
  }

  div.btns li.active::after {
    content: "";
    display: block;
    position: absolute;
    height: 50px;
    width: 20px;
    background-color: #4062ff;
    transform: translate(-300%, -75%);
    border-radius: 0 20px 20px 0;
  }
</style>
