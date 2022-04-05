<script>
</script>

<div
  class="left--pane w-full h-full bg-white flex flex-col justify-start align-middle"
>
  <img src="./logo.svg" alt="" class="h-14 my-6" />
  <div class="btns h-full w-full flex flex-col justify-start list-none">
    <li class=" ml-[40px] px-[20px] py-[15px] rounded-2xl mr-6">Dashboard</li>
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
