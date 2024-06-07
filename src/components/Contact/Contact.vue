<template>
  <div class="md:container md:px-10 sm:px-6">
    <div class="flex flex-col items-center sm:mt-[25%] md:mt-[12%] mb-10 ">
      <h2 class="text-5xl font-semibold text-deepBlue">Contact Us</h2>
      <p class="w-[36%] text-center text-base font-normal text-deepBlue/70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
    </div>

    <div class="mx-auto flex flex-col gap-7 md:p-7 sm:px-3 md:px-14 bg-[#F4F6FC]">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 md:gap-12 sm:gap-5">
        <div class="md:w-[438] flex flex-col gap-2">
          <label class="text-lg md:text-start sm:text-center font-normal text-black" for="name">Name</label>
          <input
            class="border outline-none placeholder:text-black text-base font-normal rounded-md px-6 py-2"
            placeholder="Enter your name"
            id="name"
          />
        </div>
        <div class="w-[438] flex flex-col gap-2">
          <label class="text-lg font-normal md:text-start sm:text-center text-black" for="email"
            >Email</label
          >
          <input
            class="border outline-none placeholder:text-black text-base font-normal rounded-md px-6 py-2"
            placeholder="Enter your email"
            id="email"
          />
        </div>
        <div class="w-[438] flex flex-col gap-2">
          <label class="text-lg font-normal md:text-start sm:text-center text-black" for="context"
            >Context</label
          >
          <input
            class="border outline-none text-base placeholder:text-black font-normal rounded-md px-6 py-2"
            placeholder="Provide context"
            id="context"
          />
        </div>
        <div class="w-[438] flex flex-col gap-2">
          <label class="text-lg font-normal md:text-start sm:text-center text-black" for="subject"
            >Subject</label
          >
          <select
            class="border text-black text-base font-normal rounded-md px-3 py-3 bg-white outline-none"
            id="subject"
          >
            <option
              class="outline-none border-none"
              v-for="(item, i) in 5"
              :key="i"
              value="test"
            >
              Select Subject
            </option>
          </select>
        </div>
      </div>
      <div>
        <div class="flex flex-col gap-2">
          <label class="text-lg font-normal text-black" for="message"
            >Message</label
          >
          <textarea
            class="border outline-none xl:h-[40vh] md:h-[30vh] sm:h-[16vh] text-base placeholder:text-black font-normal rounded-md px-6 py-2"
            id="message"
            
          ></textarea>
        </div>
      </div>
      <div>
        <div class="flex md:justify-start sm:justify-center">
          <button
          class="bg-deepBlue px-9 py-2.5 text-lg text-[#F4F6FC] rounded-3xl hover:bg-[#FCD980] hover:text-deepBlue sm:mb-9"
        >
          Send Message
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
