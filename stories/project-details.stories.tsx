import {
  ArrowLeft,
  ArrowRight,
  ChartBreakoutCircle,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Flag,
  HelpCircle,
  Home03,
  Info,
  MapPin,
  MessageTextCircle01,
  MessageTextSquare01,
  Rocket02,
  Share06,
  ShieldDollar,
  ShieldZap,
  ShoppingCart,
  Star,
  Stars02,
  Users03,
} from "@blend-metrics/icons"
import * as RadixTabs from "@radix-ui/react-tabs"
import { Meta } from "@storybook/react"
import { AnimatePresence, motion } from "framer-motion"
import { TbStar, TbStarHalfFilled } from "react-icons/tb"
import { LikeDislike } from "@/components/like-dislike"
import NextImage from "@/components/next-image"
import NextLink from "@/components/next-link"
import { ReadMoreLess } from "@/components/read-more-less"
import { ShowMoreLess, ShowMoreLessRoot } from "@/components/show-more-less"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarFallbackIcon,
  AvatarGroup,
  AvatarImage,
  Badge,
  Button,
  DisclosureContent,
  Favorite,
  Input,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Progress,
  RatingGroupContext,
  RatingGroupControl,
  RatingGroupHiddenInput,
  RatingGroupItem,
  RatingGroupItemContext,
  RatingGroupLabel,
  RatingGroupRoot,
  ScrollArea,
  ScrollBar,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui"
import {
  Layout,
  SectionSearchBar,
  TopMostHeader,
} from "./talent-profile.stories"

const meta: Meta = {
  title: "Project Details",
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

export const Default = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopMostHeader />
      <Layout>
        <div className="bg-gray-50 border-b border-gray-200 pt-6 px-[100px] pb-[50px]">
          <div className="max-w-[1440px] mx-auto flex items-start gap-x-8">
            <div className="flex-auto">
              <div className="flex items-center gap-x-2">
                <Home03 className="size-[18px] text-gray-500/50 hover:text-gray-500" />

                <div className="inline-flex items-center gap-x-2">
                  <span className="text-xs leading-6 text-gray-500/50 hover:text-gray-500 font-semibold">
                    /
                  </span>
                  <span className="text-xs leading-6 text-gray-500/50 hover:text-gray-500 font-semibold">
                    Software Development
                  </span>
                </div>

                <div className="inline-flex items-center gap-x-2">
                  <span className="text-xs leading-6 text-gray-500/50 hover:text-gray-500 font-semibold">
                    /
                  </span>
                  <span className="text-xs leading-6 text-gray-500/50 hover:text-gray-500 font-semibold">
                    Mobile Applications
                  </span>
                </div>

                <div className="inline-flex items-center gap-x-2">
                  <span className="text-xs leading-6 text-gray-500/50 hover:text-gray-500 font-semibold">
                    /
                  </span>
                  <span className="text-xs leading-6 text-gray-500/50 hover:text-gray-500 font-semibold">
                    iOS Development
                  </span>
                </div>
              </div>

              <div className="flex gap-x-[13px] items-start mt-8">
                <div className="w-[189px] h-[126px] relative overflow-hidden rounded-lg">
                  <NextImage
                    src="/dashboard.png"
                    alt="Dashboard"
                    sizes="25vw"
                    fill
                  />
                </div>

                <div className="flex flex-col items-start gap-y-3">
                  <Badge visual="gray">Mobile Application</Badge>
                  <h1 className="text-[28px] leading-none font-bold text-dark-blue-400">
                    The Ultimate Mobile App Experience
                  </h1>

                  <div className="flex items-center gap-x-2">
                    <div className="inline-flex items-center gap-x-1.5">
                      <div className="inline-flex items-center gap-x-0.5">
                        <Star className="shrink-0 size-4 text-primary-500 fill-primary-500" />
                        <Star className="shrink-0 size-4 text-primary-500 fill-primary-500" />
                        <Star className="shrink-0 size-4 text-primary-500 fill-primary-500" />
                        <Star className="shrink-0 size-4 text-primary-500 fill-primary-500" />
                        <Star className="shrink-0 size-4 text-primary-500" />
                      </div>
                      <span className="text-sm leading-none font-semibold text-dark-blue-400">
                        4.9 <span className="font-medium">(14 ratings)</span>
                      </span>
                    </div>

                    <span className="size-1 shrink-0 rounded-full bg-dark-blue-400" />

                    <div className="inline-flex items-center gap-x-1.5">
                      <ShoppingCart className="size-[18px] shrink-0" />
                      <span className="text-sm leading-none font-semibold text-dark-blue-400">
                        31 sales
                      </span>
                    </div>

                    <span className="size-1 shrink-0 rounded-full bg-dark-blue-400" />

                    <div className="inline-flex items-center gap-x-1.5">
                      <ChartBreakoutCircle className="size-[18px] shrink-0" />
                      <span className="text-sm leading-none font-semibold text-dark-blue-400">
                        Top Rated
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-x-3">
                    <Button variant="link" visual="gray">
                      Software Development
                    </Button>
                    <Button variant="link" visual="gray">
                      Mobile Applications
                    </Button>
                    <Button variant="link" visual="gray">
                      IOS Development
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-sm font-extralight text-dark-blue-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.{" "}
                </p>
              </div>
            </div>

            <div className="w-[390px] shrink-0">
              <div className="absolute mt-[32px] w-[390px]">
                <div className="bg-white shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] rounded-lg border border-gray-200">
                  <div className="relative border-b p-6 border-gray-200">
                    <div className="flex items-center">
                      <Badge visual="gray">Starting At</Badge>
                      <div className="inline-flex items-center gap-x-1.5 ml-2">
                        <span className="text-2xl leading-none font-bold text-dark-blue-400">
                          $5,000
                        </span>
                        <span className="text-sm font-medium leading-none text-dark-blue-400">
                          per
                        </span>
                      </div>

                      <div className="ml-1.5">
                        <Listbox defaultValue="Week">
                          <ListboxButton
                            className="text-sm py-[5px] px-[7px] h-max w-auto"
                            iconClassName="ml-1"
                            placeholder="Select"
                          />
                          <ListboxOptions className="w-[153px]">
                            {["Week", "2-week", "Month", "Quarter", "Year"].map(
                              (timeline) => (
                                <ListboxOption key={timeline} value={timeline}>
                                  {timeline}
                                </ListboxOption>
                              )
                            )}
                          </ListboxOptions>
                        </Listbox>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="inline-block text-sm leading-none font-medium text-dark-blue-400">
                        with an initial payment of $833 to kickoff
                      </span>
                    </div>

                    <div className="flex flex-col items-start gap-y-3 mt-6">
                      <span className="inline-block text-xs font-medium text-dark-blue-400">
                        Current Team
                      </span>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <AvatarGroup size="sm" excess>
                              <Avatar
                                className="border-2 border-white hover:ring-0 active:ring-0"
                                size="sm"
                              >
                                <AvatarImage src="/woman.jpg" alt="Woman" />
                                <AvatarFallback>W</AvatarFallback>
                              </Avatar>
                              <Avatar
                                className="border-2 border-white hover:ring-0 active:ring-0"
                                size="sm"
                              >
                                <AvatarImage src="/woman.jpg" alt="Woman" />
                                <AvatarFallback>W</AvatarFallback>
                              </Avatar>
                              <Avatar
                                className="border-2 border-white hover:ring-0 active:ring-0"
                                size="sm"
                              >
                                <AvatarImage src="/woman.jpg" alt="Woman" />
                                <AvatarFallback>W</AvatarFallback>
                              </Avatar>
                              <Avatar
                                className="border-2 border-white hover:ring-0 active:ring-0"
                                size="sm"
                              >
                                <AvatarImage src="/woman.jpg" alt="Woman" />
                                <AvatarFallback>W</AvatarFallback>
                              </Avatar>
                              <Avatar
                                className="border-2 border-white hover:ring-0 active:ring-0"
                                size="sm"
                              >
                                <AvatarImage src="/woman.jpg" alt="Woman" />
                                <AvatarFallback>W</AvatarFallback>
                              </Avatar>
                              <Avatar
                                className="border-2 border-white hover:ring-0 active:ring-0"
                                size="sm"
                              >
                                <AvatarImage src="/woman.jpg" alt="Woman" />
                                <AvatarFallback>W</AvatarFallback>
                              </Avatar>
                            </AvatarGroup>
                          </TooltipTrigger>
                          <TooltipContent className="p-0" size="md">
                            <ScrollArea
                              className="h-[192px] p-3 pr-4"
                              scrollBar={
                                <ScrollBar
                                  className="w-4 p-1"
                                  thumbClassName="bg-white/20"
                                />
                              }
                            >
                              <div className="space-y-3 pr-5">
                                <div className="flex items-center gap-x-[18px]">
                                  <div className="flex items-center gap-x-2 flex-auto">
                                    <Avatar>
                                      <AvatarImage
                                        src="/woman.jpg"
                                        alt="Woman"
                                      />
                                      <AvatarFallback>W</AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col flex-auto">
                                      <div className="flex items-center gap-x-0.5">
                                        <span className="text-xs leading-5 font-semibold text-white">
                                          Sevil
                                        </span>
                                        <span className="text-[10px] leading-none font-light text-white">
                                          @designsuperstar23
                                        </span>
                                      </div>
                                      <span className="text-[10px] font-light text-white">
                                        Full-stack Developer
                                      </span>
                                    </div>
                                  </div>

                                  <span className="text-sm font-semibold text-white leading-5">
                                    $75{" "}
                                    <span className="text-[10px] font-light leading-5">
                                      /hr
                                    </span>
                                  </span>
                                </div>
                                <div className="flex items-center gap-x-[18px]">
                                  <div className="flex items-center gap-x-2 flex-auto">
                                    <Avatar>
                                      <AvatarImage
                                        src="/woman.jpg"
                                        alt="Woman"
                                      />
                                      <AvatarFallback>W</AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col flex-auto">
                                      <div className="flex items-center gap-x-0.5">
                                        <span className="text-xs leading-5 font-semibold text-white">
                                          Sevil
                                        </span>
                                        <span className="text-[10px] leading-none font-light text-white">
                                          @designsuperstar23
                                        </span>
                                      </div>
                                      <span className="text-[10px] font-light text-white">
                                        Full-stack Developer
                                      </span>
                                    </div>
                                  </div>

                                  <span className="text-sm font-semibold text-white leading-5">
                                    $75{" "}
                                    <span className="text-[10px] font-light leading-5">
                                      /hr
                                    </span>
                                  </span>
                                </div>
                                <div className="flex items-center gap-x-[18px]">
                                  <div className="flex items-center gap-x-2 flex-auto">
                                    <Avatar>
                                      <AvatarImage
                                        src="/woman.jpg"
                                        alt="Woman"
                                      />
                                      <AvatarFallback>W</AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col flex-auto">
                                      <div className="flex items-center gap-x-0.5">
                                        <span className="text-xs leading-5 font-semibold text-white">
                                          Sevil
                                        </span>
                                        <span className="text-[10px] leading-none font-light text-white">
                                          @designsuperstar23
                                        </span>
                                      </div>
                                      <span className="text-[10px] font-light text-white">
                                        Full-stack Developer
                                      </span>
                                    </div>
                                  </div>

                                  <span className="text-sm font-semibold text-white leading-5">
                                    $75{" "}
                                    <span className="text-[10px] font-light leading-5">
                                      /hr
                                    </span>
                                  </span>
                                </div>
                                <div className="flex items-center gap-x-[18px]">
                                  <div className="flex items-center gap-x-2 flex-auto">
                                    <Avatar>
                                      <AvatarImage
                                        src="/woman.jpg"
                                        alt="Woman"
                                      />
                                      <AvatarFallback>W</AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col flex-auto">
                                      <div className="flex items-center gap-x-0.5">
                                        <span className="text-xs leading-5 font-semibold text-white">
                                          Sevil
                                        </span>
                                        <span className="text-[10px] leading-none font-light text-white">
                                          @designsuperstar23
                                        </span>
                                      </div>
                                      <span className="text-[10px] font-light text-white">
                                        Full-stack Developer
                                      </span>
                                    </div>
                                  </div>

                                  <span className="text-sm font-semibold text-white leading-5">
                                    $75{" "}
                                    <span className="text-[10px] font-light leading-5">
                                      /hr
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </ScrollArea>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-x-[6.4px]">
                        <Clock className="size-[18px] text-primary-500" />
                        <span className="text-sm leading-none font-medium text-dark-blue-400">
                          Starting from a 6 month duration
                        </span>
                      </div>
                      <div className="flex items-center gap-x-[6.4px]">
                        <Users03 className="size-[18px] text-primary-500" />
                        <span className="text-sm leading-none font-medium text-dark-blue-400">
                          Minimum 4 team members
                        </span>
                      </div>
                    </div>

                    <Button
                      size="lg"
                      className="mt-6 w-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white"
                      variant="outlined"
                    >
                      Start Project
                    </Button>

                    <div className="flex items-center gap-x-1 mt-6">
                      <span className="text-sm font-medium leading-none text-dark-blue-400">
                        Additional payment plans available with
                      </span>
                      <Info className="size-[17px] text-gray-500" />
                    </div>

                    <Favorite className="absolute top-5 right-5 size-[30px]" />
                  </div>

                  <div className="h-[50px] rounded-b-lg bg-gray-50 flex items-center justify-evenly">
                    <div className="inline-flex items-center gap-x-2">
                      <Flag className="size-[15px] text-gray-500" />
                      <span className="text-sm font-extralight leading-5 text-gray-500">
                        Report
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-x-2">
                      <HelpCircle className="size-[15px] text-gray-500" />
                      <span className="text-sm font-extralight leading-5 text-gray-500">
                        Help
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-x-2">
                      <Share06 className="size-[15px] text-gray-500" />
                      <span className="text-sm font-extralight leading-5 text-gray-500">
                        Share
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-6">
                  <h1 className="text-base leading-none font-semibold text-dark-blue-400">
                    Peace of Mind Guarantee
                  </h1>

                  <div className="mt-5 space-y-5">
                    <article className="flex items-start gap-x-2">
                      <Rocket02 className="size-[18px] text-dark-blue-400" />
                      <div className="flex-auto space-y-1">
                        <h1 className="text-xs leading-none font-semibold text-dark-blue-400">
                          Peace of Mind Guarantee
                        </h1>
                        <p className="text-xs leading-none font-extralight text-dark-blue-400">
                          If the project falls short, you can initiate a dispute
                          for a full refund.
                        </p>
                      </div>
                    </article>
                    <article className="flex items-start gap-x-2">
                      <ShieldZap className="size-[18px] text-dark-blue-400" />
                      <div className="flex-auto space-y-1">
                        <h1 className="text-xs leading-none font-semibold text-dark-blue-400">
                          Peace of Mind Guarantee
                        </h1>
                        <p className="text-xs leading-none font-extralight text-dark-blue-400">
                          If the project falls short, you can initiate a dispute
                          for a full refund.
                        </p>
                      </div>
                    </article>
                  </div>

                  <article className="flex items-start gap-x-2 p-3 mt-3 rounded-lg bg-primary-50">
                    <ShieldDollar className="size-[18px] text-primary-500" />
                    <div className="flex-auto">
                      <p className="text-xs leading-none font-extralight text-dark-blue-400">
                        If the project falls short, you can initiate a dispute
                        for a full refund.
                      </p>
                    </div>
                  </article>

                  <div className="mt-3">
                    <span className="text-xs leading-none text-dark-blue-400">
                      We securely process payments and release upon rating. We
                      securely process payments{" "}
                      <Button variant="link">See Policy Details.</Button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="max-w-[1240px] mx-auto">
            <div>
              <div className="flex-auto max-w-[818px]">
                <div className="h-12 flex items-center justify-between border-b border-gray-200">
                  <Button className="group" variant="link" visual="gray">
                    <ArrowLeft className="size-[15px] transition duration-300 group-hover:-translate-x-[4px]" />{" "}
                    Back To Search
                  </Button>

                  <Button variant="link">
                    <MessageTextCircle01 className="size-5" />
                    Live Chat
                  </Button>

                  <Button variant="link" visual="gray">
                    View Project Scope
                    <ChevronDown className="size-[15px]" />
                  </Button>
                </div>

                <div className="mt-6">
                  <Tabs defaultValue="Description">
                    <TabsList className="w-full justify-start">
                      <TabsTrigger value="Description">Description</TabsTrigger>
                      <TabsTrigger value="Delierables">Delierables</TabsTrigger>
                      <TabsTrigger value="Project Details">
                        Project Details
                      </TabsTrigger>
                      <TabsTrigger value="How it Works">
                        How it Works
                      </TabsTrigger>
                      <TabsTrigger value="Questions">Questions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="Description">
                      <div className="pt-6">
                        <div className="relative border border-gray-200 bg-white rounded-lg p-6 shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                          <h1 className="text-2xl leading-none font-semibold text-dark-blue-400">
                            Section H1 Title
                          </h1>

                          <div className="mt-6 border-t pt-6 border-gray-200">
                            <h2 className="text-xl leading-none text-dark-blue-400 font-semibold">
                              H2 Title
                            </h2>

                            <h3 className="mt-6 text-base font-semibold text-dark-blue-400 leading-none">
                              H3 Title
                            </h3>

                            <p className="mt-6 text-base font-extralight leading-none text-dark-blue-400">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <h1 className="mt-6 text-2xl leading-none font-semibold text-dark-blue-400">
                              Section H1 Title
                            </h1>
                          </div>

                          <div className="mt-6 border-t pb-6 border-gray-200">
                            <p className="mt-6 text-base font-extralight leading-none text-dark-blue-400">
                              Ut enim ad minim veniam, quis nostrud exercitation
                              ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit
                              in voluptate velit esse cillum dolore eu fugiat
                              nulla pariatur. Excepteur sint occaecat cupidatat
                              non proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                              <ul className="mt-5">
                                <li className="text-base font-extralight leading-none text-dark-blue-400">
                                  <span className="font-semibold">
                                    Main Bullet Point 1:
                                  </span>{" "}
                                  Sed ut perspiciatis unde omnis iste natus Main
                                  Bullet Point 2: error sit voluptatem
                                  accusantium doloremque laudantium, totam rem
                                  aperiam Main Bullet Point 3: eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
                                </li>
                              </ul>
                            </p>
                          </div>

                          <div className="absolute inset-x-0 bottom-0 h-[136px] bg-[linear-gradient(174.9deg,theme(colors.white/0)_7.46%,theme(colors.white)_62.15%)] pb-[26px] flex justify-center items-end">
                            <Button visual="gray" variant="link">
                              View More
                            </Button>
                          </div>
                        </div>

                        <div className="relative border border-gray-200 bg-white rounded-lg p-6 shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] mt-6">
                          <h2 className="text-xl leading-none text-dark-blue-400 font-semibold">
                            Deliverables
                          </h2>

                          <div className="mt-6">
                            <span className="block text-sm font-extralight text-dark-blue-400">
                              Phase One{" "}
                              <span className="font-semibold">Research</span>
                            </span>

                            <div className="mt-3 grid grid-cols-3 gap-y-3">
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 border-t border-gray-200 pt-5">
                            <span className="block text-sm font-extralight text-dark-blue-400">
                              Phase One{" "}
                              <span className="font-semibold">Research</span>
                            </span>

                            <div className="mt-3 grid grid-cols-3 gap-y-3">
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 border-t border-gray-200 pt-5">
                            <span className="block text-sm font-extralight text-dark-blue-400">
                              Phase One{" "}
                              <span className="font-semibold">Research</span>
                            </span>

                            <div className="mt-3 grid grid-cols-3 gap-y-3">
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-5 border-t border-gray-200 pt-5">
                            <span className="block text-sm font-extralight text-dark-blue-400">
                              Phase One{" "}
                              <span className="font-semibold">Research</span>
                            </span>

                            <div className="mt-3 grid grid-cols-3 gap-y-3">
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                              <div className="flex items-center gap-x-3">
                                <span className="inline-flex size-3 items-center justify-center shrink-0 rounded-full bg-primary-500 text-white">
                                  <Check className="size-2" />
                                </span>

                                <p className="text-sm font-extralight leading-none text-dark-blue-400">
                                  Market Analysis Report
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="absolute inset-x-0 bottom-0 h-[136px] bg-[linear-gradient(174.9deg,theme(colors.white/0)_7.46%,theme(colors.white)_62.15%)] pb-[26px] flex justify-center items-end">
                            <Button visual="gray" variant="link">
                              View More
                            </Button>
                          </div>
                        </div>

                        <div className="mt-6 border gap-x-[50px] rounded-lg border-gray-200 bg-white shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                          <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl leading-none font-bold text-dark-blue-400">
                              Project Details
                            </h2>

                            <div className="mt-6">
                              <div className="grid gap-x-6 grid-cols-2">
                                <div className="space-y-3">
                                  <h3 className="text-sm leading-none font-medium text-dark-blue-400">
                                    Programming Languages
                                  </h3>

                                  <div className="flex items-center flex-wrap gap-1">
                                    <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                      Python,
                                    </span>
                                    <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                      React.js,
                                    </span>
                                    <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                      Node.js,
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <h3 className="text-sm leading-none font-medium text-dark-blue-400">
                                    Development Tech
                                  </h3>

                                  <div className="flex items-center flex-wrap gap-1">
                                    <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                      Flutter,
                                    </span>
                                    <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                      React,
                                    </span>
                                    <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                      Native OS,
                                    </span>
                                    <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                      Ionic,
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="grid gap-x-6 grid-cols-2 mt-10">
                                <div className="space-y-3">
                                  <h3 className="text-sm leading-none font-medium text-dark-blue-400">
                                    Subcategories
                                  </h3>

                                  <div className="gap-2 flex items-center flex-wrap">
                                    <Badge visual="gray" size="md">
                                      iOS
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      E-commerce
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      Mobile Application
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      Small Business
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      Software Development
                                    </Badge>

                                    <Button
                                      variant="link"
                                      visual="gray"
                                      className="text-gray-700 hover:text-gray-900 font-medium"
                                    >
                                      +10 more
                                    </Button>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <h3 className="text-sm leading-none font-medium text-dark-blue-400">
                                    Tags
                                  </h3>

                                  <div className="gap-2 flex items-center flex-wrap">
                                    <Badge visual="gray" size="md">
                                      B2C
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      Marketplace
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      Small Business
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      Custom
                                    </Badge>
                                    <Badge visual="gray" size="md">
                                      Native Application
                                    </Badge>

                                    <Button
                                      variant="link"
                                      visual="gray"
                                      className="text-gray-700 hover:text-gray-900 font-medium"
                                    >
                                      +5 more
                                    </Button>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-10">
                                <h3 className="text-sm leading-none font-medium text-dark-blue-400">
                                  Date Published
                                </h3>
                                <p className="mt-3 text-base leading-none text-gray-500">
                                  Feb 20, 2025
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="text-base leading-none font-semibold text-dark-blue-400">
                              About the Team
                            </h3>

                            <div className="grid grid-cols-2 gap-x-6 mt-6">
                              <div className="flex items-start gap-x-3">
                                <Avatar size="lg">
                                  <AvatarImage src="/man.jpg" alt="Man" />
                                  <AvatarFallback>M</AvatarFallback>
                                </Avatar>

                                <div className="space-y-1.5">
                                  <Badge
                                    className="rounded-[4px] bg-primary-50"
                                    visual="primary"
                                  >
                                    Project Lead
                                  </Badge>

                                  <div className="flex flex-col gap-y-0.5">
                                    <span className="block text-sm leading-none text-gray-500 font-extralight">
                                      <span className="text-base font-bold text-dark-blue-400 ">
                                        Chris
                                      </span>{" "}
                                      @ux23isee
                                    </span>

                                    <span className="text-sm leading-none font-extralight text-dark-blue-400">
                                      Full Stack Designer
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <h3 className="flex items-center gap-x-[5.85px] text-sm leading-none font-extralight text-dark-blue-400">
                                  <MapPin className="size-[18px]" /> Locations
                                </h3>

                                <div className="gap-1 flex items-center flex-wrap">
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    USA,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    UK,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    Brazil,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    and 1 more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-x-6">
                              <div className="space-y-3">
                                <h3 className="flex items-center gap-x-[5.85px] text-sm leading-none font-extralight text-dark-blue-400">
                                  <MessageTextSquare01 className="size-[18px]" />{" "}
                                  Languages
                                </h3>

                                <div className="gap-1 flex items-center flex-wrap">
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    English,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    Spanish,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    French
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <h3 className="flex items-center gap-x-[5.85px] text-sm leading-none font-extralight text-dark-blue-400">
                                  <Stars02 className="size-[18px]" /> Skills &
                                  Expertise
                                </h3>

                                <div className="gap-1 flex items-center flex-wrap">
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    Performance,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    Security,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    Operating Systems,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    Design,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    Databases,
                                  </span>
                                  <span className="inline-block text-sm leading-6 font-semibold text-dark-blue-400">
                                    and 1 more...
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="relative border mt-6 border-gray-200 bg-white rounded-lg p-6 shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                          <h3 className="text-center text-xs leading-none text-dark-blue-400 font-semibold">
                            How It Works
                          </h3>

                          <h1 className="mt-3 text-center text-2xl leading-none text-dark-blue-400 font-semibold">
                            Unlock your project vision, your way
                          </h1>

                          <div className="mt-8 grid grid-cols-3 gap-x-[47px] px-6">
                            <article>
                              <div className="size-[77px] bg-gray-100 rounded-lg" />

                              <div className="flex items-center gap-x-3 mt-3">
                                <h1 className="text-[32px] font-bold leading-none text-dark-blue-400">
                                  1
                                </h1>

                                <h3 className="text-base leading-none font-semibold text-dark-blue-400">
                                  Customize Your Scope
                                </h3>
                              </div>

                              <div className="pl-[28px]">
                                <p className="text-xs text-dark-blue-400 leading-none">
                                  Lorem ipsum odor amet, consectetuer adipiscing
                                  elit.
                                </p>
                              </div>
                            </article>
                            <article>
                              <div className="size-[77px] bg-gray-100 rounded-lg" />

                              <div className="flex items-center gap-x-3 mt-3">
                                <h1 className="text-[32px] font-bold leading-none text-dark-blue-400">
                                  1
                                </h1>

                                <h3 className="text-base leading-none font-semibold text-dark-blue-400">
                                  Customize Your Scope
                                </h3>
                              </div>

                              <div className="pl-[28px]">
                                <p className="text-xs text-dark-blue-400 leading-none">
                                  Lorem ipsum odor amet, consectetuer adipiscing
                                  elit.
                                </p>
                              </div>
                            </article>
                            <article>
                              <div className="size-[77px] bg-gray-100 rounded-lg" />

                              <div className="flex items-center gap-x-3 mt-3">
                                <h1 className="text-[32px] font-bold leading-none text-dark-blue-400">
                                  1
                                </h1>

                                <h3 className="text-base leading-none font-semibold text-dark-blue-400">
                                  Customize Your Scope
                                </h3>
                              </div>

                              <div className="pl-[28px]">
                                <p className="text-xs text-dark-blue-400 leading-none">
                                  Lorem ipsum odor amet, consectetuer adipiscing
                                  elit.
                                </p>
                              </div>
                            </article>
                          </div>

                          <div className="mt-8  flex items-center justify-center">
                            <Button visual="gray" variant="outlined">
                              Learn More
                            </Button>
                          </div>
                        </div>

                        <div className="p-6 mt-6 border gap-x-[50px] rounded-lg border-gray-200 bg-white shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                          <h1 className="text-xl font-bold leading-none text-dark-blue-400">
                            Questions
                          </h1>

                          <div className="mt-6 p-6 rounded-lg border border-gray-200 bg-gray-50">
                            <Label
                              className="font-semibold inline-flex items-center gap-x-2"
                              size="md"
                            >
                              <HelpCircle className="size-[18px] text-primary-500" />
                              Have a specific question in mind?
                            </Label>

                            <div className="mt-3 flex gap-x-2 items-center">
                              <Input
                                className="flex-auto"
                                placeholder="Type your question..."
                              />
                              <Button
                                className="text-xs leading-none"
                                size="lg"
                              >
                                Ask Question
                              </Button>
                            </div>

                            <div className="mt-2 flex items-center justify-between">
                              <span className="text-xs text-dark-blue-400 leading-none">
                                A team member will reach out to you as soon as
                                possible.
                              </span>

                              <span className="text-xs text-dark-blue-400 leading-none">
                                Avg. response time: 20 mins
                              </span>
                            </div>

                            <div className="mt-6 flex items-center gap-3 flex-wrap">
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your portfolio?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                              <Badge
                                className="transition duration-300 bg-white border-[1.5px] border-gray-300 hover:border-dark-blue-400 hover:text-dark-blue-400"
                                size="lg"
                                visual="gray"
                              >
                                Can I see your work?
                              </Badge>
                            </div>
                          </div>

                          <div className="mt-8">
                            <Tabs defaultValue="FAQs">
                              <RadixTabs.List className="flex items-center justify-between">
                                <div className="flex items-center gap-x-3">
                                  <TabsTrigger
                                    variant="unstyled"
                                    showUnderline={false}
                                    value="FAQs"
                                    className="focus-visible:outline-none py-[7px] bg-white hover:bg-gray-50 hover:border-gray-400 px-3.5 border-2 border-gray-300 data-[state=active]:text-dark-blue-400 data-[state=active]:bg-white hover:data-[state=active]:bg-white data-[state=active]:border-dark-blue-400 hover:data-[state=active]:text-dark-blue-400 hover:data-[state=active]:border-dark-blue-400  text-gray-500 hover:text-gray-600 rounded-full text-sm leading-5 font-medium transition duration-300"
                                  >
                                    FAQ&apos;s
                                  </TabsTrigger>
                                  <TabsTrigger
                                    variant="unstyled"
                                    showUnderline={false}
                                    value="Recently Asked Questions"
                                    className="focus-visible:outline-none py-[7px] bg-white hover:bg-gray-50 hover:border-gray-400 px-3.5 border-2 border-gray-300 data-[state=active]:text-dark-blue-400 data-[state=active]:bg-white hover:data-[state=active]:bg-white data-[state=active]:border-dark-blue-400 hover:data-[state=active]:text-dark-blue-400 hover:data-[state=active]:border-dark-blue-400  text-gray-500 hover:text-gray-600 rounded-full text-sm leading-5 font-medium transition duration-300"
                                  >
                                    Recently Asked Questions
                                  </TabsTrigger>
                                </div>
                              </RadixTabs.List>

                              <TabsContent value="FAQs">
                                <Accordion
                                  type="single"
                                  className="pt-6 space-y-[15px]"
                                  defaultValue="item-1"
                                >
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-1"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex items-center gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                      <span className="flex-auto text-left inline-block">
                                        How will you ensure we&apos;re aligned
                                        on progress and feedback throughout each
                                        stage?
                                      </span>
                                      <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                    </AccordionTrigger>

                                    <DisclosureContent className="text-base px-5 pb-5 leading-[1.5] text-dark-blue-400 font-light">
                                      We offer a comprehensive range of IT
                                      consulting services, including IT strategy
                                      development, software development, network
                                      infrastructure design and implementation,
                                      cybersecurity assessment and solutions,
                                      cloud computing solutions, and IT project
                                      management.
                                    </DisclosureContent>
                                  </AccordionItem>
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-2"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex items-center gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                      <span className="flex-auto text-left inline-block">
                                        How will you ensure we&apos;re aligned
                                        on progress and feedback throughout each
                                        stage?
                                      </span>
                                      <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                    </AccordionTrigger>

                                    <DisclosureContent className="text-base px-5 pb-5 leading-[1.5] text-dark-blue-400 font-light">
                                      We offer a comprehensive range of IT
                                      consulting services, including IT strategy
                                      development, software development, network
                                      infrastructure design and implementation,
                                      cybersecurity assessment and solutions,
                                      cloud computing solutions, and IT project
                                      management.
                                    </DisclosureContent>
                                  </AccordionItem>
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-3"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex items-center gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                      <span className="flex-auto text-left inline-block">
                                        How will you ensure we&apos;re aligned
                                        on progress and feedback throughout each
                                        stage?
                                      </span>
                                      <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                    </AccordionTrigger>

                                    <DisclosureContent className="text-base px-5 pb-5 leading-[1.5] text-dark-blue-400 font-light">
                                      We offer a comprehensive range of IT
                                      consulting services, including IT strategy
                                      development, software development, network
                                      infrastructure design and implementation,
                                      cybersecurity assessment and solutions,
                                      cloud computing solutions, and IT project
                                      management.
                                    </DisclosureContent>
                                  </AccordionItem>
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-4"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex items-center gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                      <span className="flex-auto text-left inline-block">
                                        How will you ensure we&apos;re aligned
                                        on progress and feedback throughout each
                                        stage?
                                      </span>
                                      <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                    </AccordionTrigger>

                                    <DisclosureContent className="text-base px-5 pb-5 leading-[1.5] text-dark-blue-400 font-light">
                                      We offer a comprehensive range of IT
                                      consulting services, including IT strategy
                                      development, software development, network
                                      infrastructure design and implementation,
                                      cybersecurity assessment and solutions,
                                      cloud computing solutions, and IT project
                                      management.
                                    </DisclosureContent>
                                  </AccordionItem>
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-5"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex items-center gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                      <span className="flex-auto text-left inline-block">
                                        How will you ensure we&apos;re aligned
                                        on progress and feedback throughout each
                                        stage?
                                      </span>
                                      <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                    </AccordionTrigger>

                                    <DisclosureContent className="text-base px-5 pb-5 leading-[1.5] text-dark-blue-400 font-light">
                                      We offer a comprehensive range of IT
                                      consulting services, including IT strategy
                                      development, software development, network
                                      infrastructure design and implementation,
                                      cybersecurity assessment and solutions,
                                      cloud computing solutions, and IT project
                                      management.
                                    </DisclosureContent>
                                  </AccordionItem>
                                </Accordion>
                              </TabsContent>

                              <TabsContent value="Recently Asked Questions">
                                <Accordion
                                  type="single"
                                  className="pt-6 space-y-[15px]"
                                  defaultValue="item-1"
                                >
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-1"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex flex-col gap-y-1">
                                      <span className="flex items-center justify-between gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                        <span className="flex-auto text-left inline-block">
                                          How will you ensure we&apos;re aligned
                                          on progress and feedback throughout
                                          each stage?
                                        </span>
                                        <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                      </span>

                                      <span className="text-xs text-left leading-none font-medium text-dark-blue-400">
                                        Asked by Kevin{" "}
                                        <span className="font-extralight">
                                          @usernamehere
                                        </span>{" "}
                                        on Jan 25, 2023
                                      </span>
                                    </AccordionTrigger>

                                    <DisclosureContent className="px-5 pb-5">
                                      <div className="flex gap-x-3 items-center">
                                        <Avatar>
                                          <AvatarImage
                                            src="/man.jpg"
                                            alt="Man"
                                          />
                                          <AvatarFallback>M</AvatarFallback>
                                        </Avatar>

                                        <div className="flex items-center gap-x-1.5">
                                          <Badge
                                            className="rounded-[4px] bg-primary-50"
                                            visual="primary"
                                          >
                                            Project Lead
                                          </Badge>

                                          <span className="text-sm leading-none font-bold text-dark-blue-400">
                                            Chris{" "}
                                            <span className="text-xs font-extralight text-gray-500">
                                              @ux23isee
                                            </span>
                                          </span>
                                        </div>
                                      </div>

                                      <div className="mt-2">
                                        <span className="leading-[1.5] text-dark-blue-400 font-light text-base">
                                          We offer a comprehensive range of IT
                                          consulting services, including IT
                                          strategy development, software
                                          development, network infrastructure
                                          design and implementation,
                                          cybersecurity assessment and
                                          solutions, cloud computing solutions,
                                          and IT project management.
                                        </span>
                                      </div>

                                      <div className="mt-5">
                                        <Button
                                          className="text-xs leading-5"
                                          variant="link"
                                          visual="gray"
                                        >
                                          Report Answer
                                        </Button>
                                      </div>
                                    </DisclosureContent>
                                  </AccordionItem>
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-2"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex flex-col gap-y-1">
                                      <span className="flex items-center justify-between gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                        <span className="flex-auto text-left inline-block">
                                          How will you ensure we&apos;re aligned
                                          on progress and feedback throughout
                                          each stage?
                                        </span>
                                        <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                      </span>

                                      <span className="text-xs text-left leading-none font-medium text-dark-blue-400">
                                        Asked by Kevin{" "}
                                        <span className="font-extralight">
                                          @usernamehere
                                        </span>{" "}
                                        on Jan 25, 2023
                                      </span>
                                    </AccordionTrigger>

                                    <DisclosureContent className="px-5 pb-5">
                                      <div className="flex gap-x-3 items-center">
                                        <Avatar>
                                          <AvatarImage
                                            src="/man.jpg"
                                            alt="Man"
                                          />
                                          <AvatarFallback>M</AvatarFallback>
                                        </Avatar>

                                        <div className="flex items-center gap-x-1.5">
                                          <Badge
                                            className="rounded-[4px] bg-primary-50"
                                            visual="primary"
                                          >
                                            Project Lead
                                          </Badge>

                                          <span className="text-sm leading-none font-bold text-dark-blue-400">
                                            Chris{" "}
                                            <span className="text-xs font-extralight text-gray-500">
                                              @ux23isee
                                            </span>
                                          </span>
                                        </div>
                                      </div>

                                      <div className="mt-2">
                                        <span className="leading-[1.5] text-dark-blue-400 font-light text-base">
                                          We offer a comprehensive range of IT
                                          consulting services, including IT
                                          strategy development, software
                                          development, network infrastructure
                                          design and implementation,
                                          cybersecurity assessment and
                                          solutions, cloud computing solutions,
                                          and IT project management.
                                        </span>
                                      </div>

                                      <div className="mt-5">
                                        <Button
                                          className="text-xs leading-5"
                                          variant="link"
                                          visual="gray"
                                        >
                                          Report Answer
                                        </Button>
                                      </div>
                                    </DisclosureContent>
                                  </AccordionItem>
                                  <AccordionItem
                                    className="rounded-lg bg-white border border-gray-300"
                                    value="item-3"
                                  >
                                    <AccordionTrigger className="w-full px-5 py-3 flex flex-col gap-y-1">
                                      <span className="flex items-center justify-between gap-x-2 text-base leading-[1.3] font-semibold flex-auto text-dark-blue-400">
                                        <span className="flex-auto text-left inline-block">
                                          How will you ensure we&apos;re aligned
                                          on progress and feedback throughout
                                          each stage?
                                        </span>
                                        <ChevronDown className="size-6 shrink-0 group-data-[state=open]/item:-rotate-180 transition duration-300" />
                                      </span>

                                      <span className="text-xs text-left leading-none font-medium text-dark-blue-400">
                                        Asked by Kevin{" "}
                                        <span className="font-extralight">
                                          @usernamehere
                                        </span>{" "}
                                        on Jan 25, 2023
                                      </span>
                                    </AccordionTrigger>

                                    <DisclosureContent className="px-5 pb-5">
                                      <div className="flex gap-x-3 items-center">
                                        <Avatar>
                                          <AvatarImage
                                            src="/man.jpg"
                                            alt="Man"
                                          />
                                          <AvatarFallback>M</AvatarFallback>
                                        </Avatar>

                                        <div className="flex items-center gap-x-1.5">
                                          <Badge
                                            className="rounded-[4px] bg-primary-50"
                                            visual="primary"
                                          >
                                            Project Lead
                                          </Badge>

                                          <span className="text-sm leading-none font-bold text-dark-blue-400">
                                            Chris{" "}
                                            <span className="text-xs font-extralight text-gray-500">
                                              @ux23isee
                                            </span>
                                          </span>
                                        </div>
                                      </div>

                                      <div className="mt-2">
                                        <span className="leading-[1.5] text-dark-blue-400 font-light text-base">
                                          We offer a comprehensive range of IT
                                          consulting services, including IT
                                          strategy development, software
                                          development, network infrastructure
                                          design and implementation,
                                          cybersecurity assessment and
                                          solutions, cloud computing solutions,
                                          and IT project management.
                                        </span>
                                      </div>

                                      <div className="mt-5">
                                        <Button
                                          className="text-xs leading-5"
                                          variant="link"
                                          visual="gray"
                                        >
                                          Report Answer
                                        </Button>
                                      </div>
                                    </DisclosureContent>
                                  </AccordionItem>
                                </Accordion>
                              </TabsContent>
                            </Tabs>
                          </div>
                        </div>

                        <div className="p-6 mt-6 border gap-x-[50px] flex items-start rounded-lg border-gray-200 bg-white shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                          <div className="flex flex-col flex-1 gap-y-1.5 basis-[147px]">
                            <h1 className="text-xl leading-none text-nowrap font-bold text-dark-blue-400">
                              Project History
                            </h1>

                            <RatingGroupRoot
                              className="flex-row gap-x-1.5 mt-1.5"
                              allowHalf
                              count={5}
                              defaultValue={4}
                              disabled
                            >
                              <RatingGroupLabel size="sm">4.9</RatingGroupLabel>
                              <RatingGroupControl>
                                <RatingGroupContext>
                                  {({ items }) =>
                                    items.map((item) => (
                                      <RatingGroupItem key={item} index={item}>
                                        <RatingGroupItemContext>
                                          {({ half }) =>
                                            half ? (
                                              <TbStarHalfFilled />
                                            ) : (
                                              <TbStar />
                                            )
                                          }
                                        </RatingGroupItemContext>
                                      </RatingGroupItem>
                                    ))
                                  }
                                </RatingGroupContext>
                                <RatingGroupHiddenInput />
                              </RatingGroupControl>
                            </RatingGroupRoot>

                            <NextLink
                              href="#"
                              className="focus-visible:outline-none text-xs leading-6 transition duration-300 hover:underline text-dark-blue-400"
                            >
                              23 ratings
                            </NextLink>
                          </div>

                          <div className="flex flex-col flex-1 gap-y-1 basis-[304px]">
                            <div className="flex items-center gap-x-2">
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold text-dark-blue-400"
                              >
                                5
                              </NextLink>
                              <Progress className="flex-auto" value={100} />
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold leading-[21px] inline-flex items-center gap-x-1 text-dark-blue-400"
                              >
                                100%{" "}
                                <span className="font-extralight">(100)</span>
                              </NextLink>
                            </div>
                            <div className="flex items-center gap-x-2">
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold text-dark-blue-400"
                              >
                                4
                              </NextLink>
                              <Progress className="flex-auto" value={75} />
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold leading-[21px] inline-flex items-center gap-x-1 text-dark-blue-400"
                              >
                                75%{" "}
                                <span className="font-extralight">(75)</span>
                              </NextLink>
                            </div>
                            <div className="flex items-center gap-x-2">
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold text-dark-blue-400"
                              >
                                3
                              </NextLink>
                              <Progress className="flex-auto" value={50} />
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold leading-[21px] inline-flex items-center gap-x-1 text-dark-blue-400"
                              >
                                50%{" "}
                                <span className="font-extralight">(50)</span>
                              </NextLink>
                            </div>
                            <div className="flex items-center gap-x-2">
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold text-dark-blue-400"
                              >
                                2
                              </NextLink>
                              <Progress className="flex-auto" value={25} />
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold leading-[21px] inline-flex items-center gap-x-1 text-dark-blue-400"
                              >
                                25%{" "}
                                <span className="font-extralight">(25)</span>
                              </NextLink>
                            </div>
                            <div className="flex items-center gap-x-2">
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold text-dark-blue-400"
                              >
                                1
                              </NextLink>
                              <Progress className="flex-auto" value={0} />
                              <NextLink
                                href="#"
                                className="hover:underline focus-visible:outline-none text-xs font-semibold leading-[21px] inline-flex items-center gap-x-1 text-dark-blue-400"
                              >
                                0% <span className="font-extralight">(0)</span>
                              </NextLink>
                            </div>
                          </div>

                          <div className="flex flex-1 flex-col basis-[304px]">
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <NextLink
                                  href="#"
                                  className="focus-visible:outline-none text-xs leading-5 font-semibold underline text-gray-500 hover:text-gray-600"
                                >
                                  Communication Level
                                </NextLink>

                                <div className="flex items-center gap-x-1">
                                  <Star className="size-3.5 text-primary-500 fill-primary-500" />
                                  <span className="text-[13px] leading-none font-medium">
                                    4.3
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <NextLink
                                  href="#"
                                  className="focus-visible:outline-none text-xs leading-5 font-semibold underline text-gray-500 hover:text-gray-600"
                                >
                                  Responsiveness
                                </NextLink>

                                <div className="flex items-center gap-x-1">
                                  <Star className="size-3.5 text-primary-500 fill-primary-500" />
                                  <span className="text-[13px] leading-none font-medium">
                                    4.3
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <NextLink
                                  href="#"
                                  className="focus-visible:outline-none text-xs leading-5 font-semibold underline text-gray-500 hover:text-gray-600"
                                >
                                  Quality of Delivery
                                </NextLink>

                                <div className="flex items-center gap-x-1">
                                  <Star className="size-3.5 text-primary-500 fill-primary-500" />
                                  <span className="text-[13px] leading-none font-medium">
                                    4.3
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <NextLink
                                  href="#"
                                  className="focus-visible:outline-none text-xs leading-5 font-semibold underline text-gray-500 hover:text-gray-600"
                                >
                                  Value of Delivery
                                </NextLink>

                                <div className="flex items-center gap-x-1">
                                  <Star className="size-3.5 text-primary-500 fill-primary-500" />
                                  <span className="text-[13px] leading-none font-medium">
                                    4.3
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <NextLink
                                  href="#"
                                  className="focus-visible:outline-none text-xs leading-5 font-semibold underline text-gray-500 hover:text-gray-600"
                                >
                                  Value of Delivery
                                </NextLink>

                                <div className="flex items-center gap-x-1">
                                  <Star className="size-3.5 text-primary-500 fill-primary-500" />
                                  <span className="text-[13px] leading-none font-medium">
                                    4.9
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Tabs className="mt-6" defaultValue="Completed">
                          <RadixTabs.List className="flex items-center justify-between">
                            <div className="flex items-center gap-x-3">
                              <TabsTrigger
                                variant="unstyled"
                                showUnderline={false}
                                value="Completed"
                                className="focus-visible:outline-none py-[7px] bg-white hover:bg-gray-50 hover:border-gray-400 px-3.5 border-2 border-gray-300 data-[state=active]:text-dark-blue-400 data-[state=active]:bg-white hover:data-[state=active]:bg-white data-[state=active]:border-dark-blue-400 hover:data-[state=active]:text-dark-blue-400 hover:data-[state=active]:border-dark-blue-400  text-gray-500 hover:text-gray-600 rounded-full text-sm leading-5 font-medium transition duration-300"
                              >
                                Completed (24)
                              </TabsTrigger>
                              <TabsTrigger
                                variant="unstyled"
                                showUnderline={false}
                                value="Ongoing"
                                className="focus-visible:outline-none py-[7px] bg-white hover:bg-gray-50 hover:border-gray-400 px-3.5 border-2 border-gray-300 data-[state=active]:text-dark-blue-400 data-[state=active]:bg-white hover:data-[state=active]:bg-white data-[state=active]:border-dark-blue-400 hover:data-[state=active]:text-dark-blue-400 hover:data-[state=active]:border-dark-blue-400  text-gray-500 hover:text-gray-600 rounded-full text-sm leading-5 font-medium transition duration-300"
                              >
                                Ongoing (7)
                              </TabsTrigger>
                            </div>

                            <div className="inline-flex items-center gap-x-3">
                              <SectionSearchBar />
                            </div>
                          </RadixTabs.List>
                          <TabsContent value="Completed">
                            <ShowMoreLessRoot>
                              {({ isShowing, setIsShowing }) => (
                                <div>
                                  <motion.div
                                    layout
                                    transition={{ ease: "easeInOut" }}
                                  >
                                    <AnimatePresence mode="popLayout">
                                      <ShowMoreLess>
                                        <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                                          <div className="flex items-center pt-6 px-6">
                                            <div className="flex-1 w-[394px] space-y-3">
                                              <div className="flex items-start gap-x-3">
                                                <Avatar size="md">
                                                  <AvatarImage
                                                    src="/man.jpg"
                                                    alt="Man"
                                                  />
                                                  <AvatarFallback>
                                                    M
                                                  </AvatarFallback>
                                                </Avatar>

                                                <div className="space-y-3">
                                                  <div className="flex flex-col gap-y-1.5">
                                                    <div className="inline-flex items-center gap-x-1">
                                                      <span className="text-base leading-6 font-semibold text-dark-blue-400">
                                                        Emily
                                                      </span>
                                                      <span className="text-base leading-6 text-dark-blue-400">
                                                        @emily.j
                                                      </span>
                                                    </div>

                                                    <div className="mt-1.5">
                                                      <span className="text-[13px] leading-6 text-dark-blue-400">
                                                        Product Manager
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div className="inline-flex items-center gap-x-2">
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      December 2020 - Present
                                                    </span>
                                                    <span className="shrink-0 size-1 rounded-full bg-gray-300 inline-block" />
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      5 yrs 2 mos
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <div className="inline-flex items-center gap-x-[2.35px]">
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                </div>

                                                <span className="text-base leading-[28.16px] font-bold text-dark-blue-400">
                                                  4.8
                                                </span>

                                                <span className="text-[11px] leading-6 font-extralight text-dark-blue-400">
                                                  Posted a week ago
                                                </span>
                                              </div>
                                            </div>

                                            <div className="flex-1 w-[477px] inline-grid grid-cols-2 gap-y-4 gap-x-[50px] pb-3">
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-3 px-6">
                                            <h1 className="text-sm leading-6 font-semibold text-dark-blue-400">
                                              Best Experience with a Backend
                                              Engineer!!!!
                                            </h1>
                                            <ReadMoreLess
                                              max={32}
                                              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque impedit eveniet harum dolores modi dolor, aspernatur saepe incidunt consequuntur et voluptatem dolorem ea sequi officia distinctio perspiciatis labore fugit eligendi architecto similique esse assumenda fugiat? Aut tempora veritatis, similique exercitationem quos consequuntur repudiandae, quaerat nesciunt ducimus beatae tempore alias repellendus id quidem pariatur blanditiis architecto quasi aperiam fugiat maiores?"
                                            >
                                              {({ readMore, text, toggle }) => (
                                                <>
                                                  <p className="text-sm leading-none mt-1 text-gray-700 font-extralight">
                                                    {text}{" "}
                                                    <Button
                                                      className="text-gray-700 hover:no-underline hover:text-gray-900 font-semibold"
                                                      size="sm"
                                                      variant="link"
                                                      visual="gray"
                                                      onClick={toggle}
                                                    >
                                                      {readMore
                                                        ? null
                                                        : "...Read More"}
                                                    </Button>
                                                  </p>
                                                </>
                                              )}
                                            </ReadMoreLess>

                                            <div className="mt-3 flex items-center justify-between">
                                              <div className="items-center inline-flex gap-x-2.5">
                                                <span className="text-xs font-medium leading-none text-dark-blue-400">
                                                  Helpful
                                                </span>
                                                <LikeDislike></LikeDislike>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-6 flex items-center gap-x-3 px-6 pb-6">
                                            <div className="w-[153px] relative rounded-lg overflow-hidden h-[98px]">
                                              <NextImage
                                                className="object-cover"
                                                src="/dashboard.png"
                                                alt="Dashboard"
                                                fill
                                                sizes="25vw"
                                              />
                                            </div>

                                            <div className="flex-auto space-y-3">
                                              <h1 className="text-sm font-bold leading-6 text-dark-blue-400">
                                                Seniority Mobile App
                                              </h1>

                                              <div className="flex gap-x-8 items-center">
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                                          <div className="flex items-center pt-6 px-6">
                                            <div className="flex-1 w-[394px] space-y-3">
                                              <div className="flex items-start gap-x-3">
                                                <Avatar size="md">
                                                  <AvatarImage
                                                    src="/man.jpg"
                                                    alt="Man"
                                                  />
                                                  <AvatarFallback>
                                                    M
                                                  </AvatarFallback>
                                                </Avatar>

                                                <div className="space-y-3">
                                                  <div className="flex flex-col gap-y-1.5">
                                                    <div className="inline-flex items-center gap-x-1">
                                                      <span className="text-base leading-6 font-semibold text-dark-blue-400">
                                                        Emily
                                                      </span>
                                                      <span className="text-base leading-6 text-dark-blue-400">
                                                        @emily.j
                                                      </span>
                                                    </div>

                                                    <div className="mt-1.5">
                                                      <span className="text-[13px] leading-6 text-dark-blue-400">
                                                        Product Manager
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div className="inline-flex items-center gap-x-2">
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      December 2020 - Present
                                                    </span>
                                                    <span className="shrink-0 size-1 rounded-full bg-gray-300 inline-block" />
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      5 yrs 2 mos
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <div className="inline-flex items-center gap-x-[2.35px]">
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                </div>

                                                <span className="text-base leading-[28.16px] font-bold text-dark-blue-400">
                                                  4.8
                                                </span>

                                                <span className="text-[11px] leading-6 font-extralight text-dark-blue-400">
                                                  Posted a week ago
                                                </span>
                                              </div>
                                            </div>

                                            <div className="flex-1 w-[477px] inline-grid grid-cols-2 gap-y-4 gap-x-[50px] pb-3">
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-3 px-6">
                                            <h1 className="text-sm leading-6 font-semibold text-dark-blue-400">
                                              Best Experience with a Backend
                                              Engineer!!!!
                                            </h1>
                                            <ReadMoreLess
                                              max={32}
                                              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque impedit eveniet harum dolores modi dolor, aspernatur saepe incidunt consequuntur et voluptatem dolorem ea sequi officia distinctio perspiciatis labore fugit eligendi architecto similique esse assumenda fugiat? Aut tempora veritatis, similique exercitationem quos consequuntur repudiandae, quaerat nesciunt ducimus beatae tempore alias repellendus id quidem pariatur blanditiis architecto quasi aperiam fugiat maiores?"
                                            >
                                              {({ readMore, text, toggle }) => (
                                                <>
                                                  <p className="text-sm leading-none mt-1 text-gray-700 font-extralight">
                                                    {text}{" "}
                                                    <Button
                                                      className="text-gray-700 hover:no-underline hover:text-gray-900 font-semibold"
                                                      size="sm"
                                                      variant="link"
                                                      visual="gray"
                                                      onClick={toggle}
                                                    >
                                                      {readMore
                                                        ? null
                                                        : "...Read More"}
                                                    </Button>
                                                  </p>
                                                </>
                                              )}
                                            </ReadMoreLess>

                                            <div className="mt-3 flex items-center justify-between">
                                              <div className="items-center inline-flex gap-x-2.5">
                                                <span className="text-xs font-medium leading-none text-dark-blue-400">
                                                  Helpful
                                                </span>

                                                <LikeDislike></LikeDislike>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-6 flex items-center gap-x-3 px-6 pb-6">
                                            <div className="w-[153px] relative rounded-lg overflow-hidden h-[98px]">
                                              <NextImage
                                                className="object-cover"
                                                src="/dashboard.png"
                                                alt="Dashboard"
                                                fill
                                                sizes="25vw"
                                              />
                                            </div>

                                            <div className="flex-auto space-y-3">
                                              <h1 className="text-sm font-bold leading-6 text-dark-blue-400">
                                                Seniority Mobile App
                                              </h1>

                                              <div className="flex gap-x-8 items-center">
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="p-6 bg-white border-gray-200 shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] border-t">
                                            <div className="flex items-center gap-x-3">
                                              <Avatar
                                                className="hover:ring-0 active:ring-primary-100"
                                                size="md"
                                              >
                                                <AvatarImage
                                                  src="/man.jpg"
                                                  alt="Man"
                                                />
                                                <AvatarFallbackIcon />
                                              </Avatar>

                                              <div className="flex flex-col flex-1">
                                                <div className="inline-flex items-center gap-x-1">
                                                  <span className="text-sm leading-6 font-bold text-dark-blue-400">
                                                    Company Response
                                                  </span>
                                                  <span className="text-sm leading-6 text-dark-blue-400">
                                                    @Acme Inc.
                                                  </span>
                                                </div>

                                                <div className="inline-flex items-center gap-x-2">
                                                  <span className="text-xs leading-none text-dark-blue-400">
                                                    90 days project
                                                  </span>
                                                  <span className="shrink-0 size-1 rounded-full bg-gray-300 inline-block" />
                                                  <span className="text-xs leading-none text-dark-blue-400">
                                                    March 2023
                                                  </span>
                                                </div>
                                              </div>
                                            </div>

                                            <ReadMoreLess
                                              max={32}
                                              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque impedit eveniet harum dolores modi dolor, aspernatur saepe incidunt consequuntur et voluptatem dolorem ea sequi officia distinctio perspiciatis labore fugit eligendi architecto similique esse assumenda fugiat? Aut tempora veritatis, similique exercitationem quos consequuntur repudiandae, quaerat nesciunt ducimus beatae tempore alias repellendus id quidem pariatur blanditiis architecto quasi aperiam fugiat maiores?"
                                            >
                                              {({ readMore, text, toggle }) => (
                                                <>
                                                  <p className="text-sm leading-none mt-1 text-gray-700 font-extralight">
                                                    {text}{" "}
                                                    <Button
                                                      className="text-gray-700 hover:no-underline hover:text-gray-900 font-semibold"
                                                      size="sm"
                                                      variant="link"
                                                      visual="gray"
                                                      onClick={toggle}
                                                    >
                                                      {readMore
                                                        ? null
                                                        : "...Read More"}
                                                    </Button>
                                                  </p>
                                                </>
                                              )}
                                            </ReadMoreLess>

                                            <div className="mt-3 flex items-center justify-between">
                                              <div className="items-center inline-flex gap-x-2.5">
                                                <span className="text-xs font-medium leading-none text-dark-blue-400">
                                                  Helpful
                                                </span>
                                                <LikeDislike></LikeDislike>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                                          <div className="flex items-center pt-6 px-6">
                                            <div className="flex-1 w-[394px] space-y-3">
                                              <div className="flex items-start gap-x-3">
                                                <Avatar size="md">
                                                  <AvatarImage
                                                    src="/man.jpg"
                                                    alt="Man"
                                                  />
                                                  <AvatarFallback>
                                                    M
                                                  </AvatarFallback>
                                                </Avatar>

                                                <div className="space-y-3">
                                                  <div className="flex flex-col gap-y-1.5">
                                                    <div className="inline-flex items-center gap-x-1">
                                                      <span className="text-base leading-6 font-semibold text-dark-blue-400">
                                                        Emily
                                                      </span>
                                                      <span className="text-base leading-6 text-dark-blue-400">
                                                        @emily.j
                                                      </span>
                                                    </div>

                                                    <div className="mt-1.5">
                                                      <span className="text-[13px] leading-6 text-dark-blue-400">
                                                        Product Manager
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div className="inline-flex items-center gap-x-2">
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      December 2020 - Present
                                                    </span>
                                                    <span className="shrink-0 size-1 rounded-full bg-gray-300 inline-block" />
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      5 yrs 2 mos
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <div className="inline-flex items-center gap-x-[2.35px]">
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                </div>

                                                <span className="text-base leading-[28.16px] font-bold text-dark-blue-400">
                                                  4.8
                                                </span>

                                                <span className="text-[11px] leading-6 font-extralight text-dark-blue-400">
                                                  Posted a week ago
                                                </span>
                                              </div>
                                            </div>

                                            <div className="flex-1 w-[477px] inline-grid grid-cols-2 gap-y-4 gap-x-[50px] pb-3">
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-3 px-6">
                                            <h1 className="text-sm leading-6 font-semibold text-dark-blue-400">
                                              Best Experience with a Backend
                                              Engineer!!!!
                                            </h1>
                                            <ReadMoreLess
                                              max={32}
                                              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque impedit eveniet harum dolores modi dolor, aspernatur saepe incidunt consequuntur et voluptatem dolorem ea sequi officia distinctio perspiciatis labore fugit eligendi architecto similique esse assumenda fugiat? Aut tempora veritatis, similique exercitationem quos consequuntur repudiandae, quaerat nesciunt ducimus beatae tempore alias repellendus id quidem pariatur blanditiis architecto quasi aperiam fugiat maiores?"
                                            >
                                              {({ readMore, text, toggle }) => (
                                                <>
                                                  <p className="text-sm leading-none mt-1 text-gray-700 font-extralight">
                                                    {text}{" "}
                                                    <Button
                                                      className="text-gray-700 hover:no-underline hover:text-gray-900 font-semibold"
                                                      size="sm"
                                                      variant="link"
                                                      visual="gray"
                                                      onClick={toggle}
                                                    >
                                                      {readMore
                                                        ? null
                                                        : "...Read More"}
                                                    </Button>
                                                  </p>
                                                </>
                                              )}
                                            </ReadMoreLess>

                                            <div className="mt-3 flex items-center justify-between">
                                              <div className="items-center inline-flex gap-x-2.5">
                                                <span className="text-xs font-medium leading-none text-dark-blue-400">
                                                  Helpful
                                                </span>

                                                <LikeDislike></LikeDislike>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-6 flex items-center gap-x-3 px-6 pb-6">
                                            <div className="w-[153px] relative rounded-lg overflow-hidden h-[98px]">
                                              <NextImage
                                                className="object-cover"
                                                src="/dashboard.png"
                                                alt="Dashboard"
                                                fill
                                                sizes="25vw"
                                              />
                                            </div>

                                            <div className="flex-auto space-y-3">
                                              <h1 className="text-sm font-bold leading-6 text-dark-blue-400">
                                                Seniority Mobile App
                                              </h1>

                                              <div className="flex gap-x-8 items-center">
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                                          <div className="flex items-center pt-6 px-6">
                                            <div className="flex-1 w-[394px] space-y-3">
                                              <div className="flex items-start gap-x-3">
                                                <Avatar size="md">
                                                  <AvatarImage
                                                    src="/man.jpg"
                                                    alt="Man"
                                                  />
                                                  <AvatarFallback>
                                                    M
                                                  </AvatarFallback>
                                                </Avatar>

                                                <div className="space-y-3">
                                                  <div className="flex flex-col gap-y-1.5">
                                                    <div className="inline-flex items-center gap-x-1">
                                                      <span className="text-base leading-6 font-semibold text-dark-blue-400">
                                                        Emily
                                                      </span>
                                                      <span className="text-base leading-6 text-dark-blue-400">
                                                        @emily.j
                                                      </span>
                                                    </div>

                                                    <div className="mt-1.5">
                                                      <span className="text-[13px] leading-6 text-dark-blue-400">
                                                        Product Manager
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div className="inline-flex items-center gap-x-2">
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      December 2020 - Present
                                                    </span>
                                                    <span className="shrink-0 size-1 rounded-full bg-gray-300 inline-block" />
                                                    <span className="text-xs leading-none text-dark-blue-400">
                                                      5 yrs 2 mos
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <div className="inline-flex items-center gap-x-[2.35px]">
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                  <Favorite
                                                    defaultPressed
                                                    className="size-[15px]"
                                                  />
                                                </div>

                                                <span className="text-base leading-[28.16px] font-bold text-dark-blue-400">
                                                  4.8
                                                </span>

                                                <span className="text-[11px] leading-6 font-extralight text-dark-blue-400">
                                                  Posted a week ago
                                                </span>
                                              </div>
                                            </div>

                                            <div className="flex-1 w-[477px] inline-grid grid-cols-2 gap-y-4 gap-x-[50px] pb-3">
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                              <div className="flex items-center gap-x-[6.4px]">
                                                <CheckCircle className="size-[18px] text-success-500" />
                                                <span className="text-sm text-dark-blue-400 leading-none font-medium">
                                                  Would Recommend
                                                </span>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-3 px-6">
                                            <h1 className="text-sm leading-6 font-semibold text-dark-blue-400">
                                              Best Experience with a Backend
                                              Engineer!!!!
                                            </h1>
                                            <ReadMoreLess
                                              max={32}
                                              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate doloremque impedit eveniet harum dolores modi dolor, aspernatur saepe incidunt consequuntur et voluptatem dolorem ea sequi officia distinctio perspiciatis labore fugit eligendi architecto similique esse assumenda fugiat? Aut tempora veritatis, similique exercitationem quos consequuntur repudiandae, quaerat nesciunt ducimus beatae tempore alias repellendus id quidem pariatur blanditiis architecto quasi aperiam fugiat maiores?"
                                            >
                                              {({ readMore, text, toggle }) => (
                                                <>
                                                  <p className="text-sm leading-none mt-1 text-gray-700 font-extralight">
                                                    {text}{" "}
                                                    <Button
                                                      className="text-gray-700 hover:no-underline hover:text-gray-900 font-semibold"
                                                      size="sm"
                                                      variant="link"
                                                      visual="gray"
                                                      onClick={toggle}
                                                    >
                                                      {readMore
                                                        ? null
                                                        : "...Read More"}
                                                    </Button>
                                                  </p>
                                                </>
                                              )}
                                            </ReadMoreLess>

                                            <div className="mt-3 flex items-center justify-between">
                                              <div className="items-center inline-flex gap-x-2.5">
                                                <span className="text-xs font-medium leading-none text-dark-blue-400">
                                                  Helpful
                                                </span>

                                                <LikeDislike></LikeDislike>
                                              </div>
                                            </div>
                                          </div>

                                          <div className="mt-6 flex items-center gap-x-3 px-6 pb-6">
                                            <div className="w-[153px] relative rounded-lg overflow-hidden h-[98px]">
                                              <NextImage
                                                className="object-cover"
                                                src="/dashboard.png"
                                                alt="Dashboard"
                                                fill
                                                sizes="25vw"
                                              />
                                            </div>

                                            <div className="flex-auto space-y-3">
                                              <h1 className="text-sm font-bold leading-6 text-dark-blue-400">
                                                Seniority Mobile App
                                              </h1>

                                              <div className="flex gap-x-8 items-center">
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                                <div className="inline-flex items-center gap-x-3">
                                                  <span className="text-sm text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                  <span className="text-sm font-bold text-dark-blue-400 leading-6">
                                                    Project Cost
                                                  </span>
                                                </div>
                                              </div>

                                              <div className="flex items-center gap-x-2">
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                                <Badge size="sm" visual="gray">
                                                  Team player
                                                </Badge>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </ShowMoreLess>
                                    </AnimatePresence>
                                  </motion.div>

                                  <div className="flex items-center justify-end mt-6">
                                    <Button
                                      size="md"
                                      visual="gray"
                                      variant="outlined"
                                      className="bg-white"
                                      onClick={() =>
                                        setIsShowing((prev) => !prev)
                                      }
                                    >
                                      {isShowing ? "View Less" : "View More"}
                                      <ChevronDown className="size-[15px]" />
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </ShowMoreLessRoot>
                          </TabsContent>

                          <TabsContent value="Ongoing">
                            <div className="mt-6 space-y-6">
                              <article className="border p-6 rounded-lg bg-white border-gray-200 shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                                <div className="flex items-start gap-x-4">
                                  <div className="relative overflow-hidden rounded-md shrink-0 w-[134px] h-[86px]">
                                    <NextImage
                                      src="/dashboard.png"
                                      alt="Dashboard"
                                      fill
                                      sizes="25vw"
                                    />
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex items-center gap-x-2">
                                      <h1 className="text-sm font-bold text-dark-blue-400">
                                        Seniority Mobile App
                                      </h1>
                                      <Badge
                                        className="border rounded-[3.15px] bg-white border-gray-300"
                                        visual="gray"
                                        variant="rounded"
                                      >
                                        <FileText className="size-[9.46px] text-primary-500" />{" "}
                                        Under NDA
                                      </Badge>
                                    </div>

                                    <div className="mt-2 flex items-center gap-x-6">
                                      <div className="flex gap-x-3">
                                        <span className="text-xs leading-6 text-dark-blue-400">
                                          Estimated Project Cost
                                        </span>
                                        <span className="font-bold text-sm leading-6 text-dark-blue-400">
                                          $25,000
                                        </span>
                                      </div>
                                      <div className="flex gap-x-3">
                                        <span className="text-xs leading-6 text-dark-blue-400">
                                          Project Type
                                        </span>
                                        <span className="font-bold text-sm leading-6 text-dark-blue-400">
                                          Cloud Software
                                        </span>
                                      </div>
                                      <div className="flex gap-x-3">
                                        <span className="text-xs leading-6 text-dark-blue-400">
                                          Current Phase
                                        </span>
                                        <span className="font-bold text-sm leading-6 text-dark-blue-400">
                                          Development
                                        </span>
                                      </div>
                                    </div>

                                    <div className="mt-2 flex items-center gap-x-2">
                                      <Badge>API-Driven</Badge>
                                      <Badge>Agile Workflow</Badge>
                                      <Badge>Cross-Platform</Badge>
                                      <Badge>Cloud-Based</Badge>
                                      <Badge>Mobile-Optimized</Badge>
                                      <Badge>FinTech</Badge>
                                      <Badge>SaaS</Badge>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-x-3 mt-3">
                                  <div className="flex items-center gap-x-4">
                                    <AvatarGroup
                                      excessClassName="border-gray-300 text-gray-500"
                                      excess
                                    >
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                    </AvatarGroup>

                                    <span className="text-xs text-dark-blue-400">
                                      Senior Front-End Developer
                                    </span>
                                  </div>

                                  <span className="shrink-0 size-1 bg-gray-300 rounded-full" />

                                  <div className="flex items-center gap-x-2">
                                    <span className="text-xs text-dark-blue-400">
                                      January 2025 - Present
                                    </span>

                                    <Badge
                                      variant="rounded"
                                      className="bg-primary-50 text-primary-500 px-1.5 rounded-[3.15px]"
                                      visual="primary"
                                    >
                                      2 Months
                                    </Badge>
                                  </div>
                                </div>
                              </article>

                              <article className="border p-6 rounded-lg bg-white border-gray-200 shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)]">
                                <div className="flex items-start gap-x-4">
                                  <div className="relative overflow-hidden rounded-md shrink-0 w-[134px] h-[86px]">
                                    <NextImage
                                      src="/dashboard.png"
                                      alt="Dashboard"
                                      fill
                                      sizes="25vw"
                                    />
                                  </div>

                                  <div className="space-y-2">
                                    <div className="flex items-center gap-x-2">
                                      <h1 className="text-sm font-bold text-dark-blue-400">
                                        Seniority Mobile App
                                      </h1>
                                      <Badge
                                        className="border rounded-[3.15px] bg-white border-gray-300"
                                        visual="gray"
                                        variant="rounded"
                                      >
                                        <FileText className="size-[9.46px] text-primary-500" />{" "}
                                        Under NDA
                                      </Badge>
                                    </div>

                                    <div className="mt-2 flex items-center gap-x-6">
                                      <div className="flex gap-x-3">
                                        <span className="text-xs leading-6 text-dark-blue-400">
                                          Estimated Project Cost
                                        </span>
                                        <span className="font-bold text-sm leading-6 text-dark-blue-400">
                                          $25,000
                                        </span>
                                      </div>
                                      <div className="flex gap-x-3">
                                        <span className="text-xs leading-6 text-dark-blue-400">
                                          Project Type
                                        </span>
                                        <span className="font-bold text-sm leading-6 text-dark-blue-400">
                                          Cloud Software
                                        </span>
                                      </div>
                                      <div className="flex gap-x-3">
                                        <span className="text-xs leading-6 text-dark-blue-400">
                                          Current Phase
                                        </span>
                                        <span className="font-bold text-sm leading-6 text-dark-blue-400">
                                          Development
                                        </span>
                                      </div>
                                    </div>

                                    <div className="mt-2 flex items-center gap-x-2">
                                      <Badge>API-Driven</Badge>
                                      <Badge>Agile Workflow</Badge>
                                      <Badge>Cross-Platform</Badge>
                                      <Badge>Cloud-Based</Badge>
                                      <Badge>Mobile-Optimized</Badge>
                                      <Badge>FinTech</Badge>
                                      <Badge>SaaS</Badge>
                                    </div>
                                  </div>
                                </div>

                                <div className="flex items-center gap-x-3 mt-3">
                                  <div className="flex items-center gap-x-4">
                                    <AvatarGroup
                                      excessClassName="border-gray-300 text-gray-500"
                                      excess
                                    >
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                      <Avatar className="border-2 border-white hover:ring-0 active:ring-0">
                                        <AvatarImage
                                          src="/woman.jpg"
                                          alt="Woman"
                                        />
                                        <AvatarFallback>W</AvatarFallback>
                                      </Avatar>
                                    </AvatarGroup>

                                    <span className="text-xs text-dark-blue-400">
                                      Senior Front-End Developer
                                    </span>
                                  </div>

                                  <span className="shrink-0 size-1 bg-gray-300 rounded-full" />

                                  <div className="flex items-center gap-x-2">
                                    <span className="text-xs text-dark-blue-400">
                                      January 2025 - Present
                                    </span>

                                    <Badge
                                      variant="rounded"
                                      className="bg-primary-50 text-primary-500 px-1.5 rounded-[3.15px]"
                                      visual="primary"
                                    >
                                      2 Months
                                    </Badge>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
