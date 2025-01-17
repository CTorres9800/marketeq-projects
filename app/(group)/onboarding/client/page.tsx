"use client"

import * as React from "react"
import { useMemo } from "react"
import { HOT_KEYS } from "@/utils/constants"
import { cn, getIsNotEmpty, hookFormHasError, keys } from "@/utils/functions"
import { useControllableState, useStepper } from "@/utils/hooks"
import {
  AlertCircle,
  Briefcase02,
  Check,
  ChevronRight,
  Home03,
  Info,
  Link01,
  Mail,
  Plus,
  Users03,
  X2,
} from "@blend-metrics/icons"
import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message"
import { zodResolver } from "@hookform/resolvers/zod"
import { Steps } from "headless-stepper"
import {
  Controller,
  SubmitHandler,
  UseFormSetValue,
  useFieldArray,
  useForm,
} from "react-hook-form"
import { useIsomorphicLayoutEffect, useToggle } from "react-use"
import { z } from "zod"
import { Logo } from "@/components/icons"
import { Pointer } from "@/components/icons/pointer"
import NextLink from "@/components/next-link"
import { Triangles } from "@/components/triangles"
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  Badge,
  Button,
  CheckboxSelector,
  CircularProgress,
  ClipboardControl,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
  ClipboardTrigger,
  Combobox,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
  ComboboxTrigger,
  ErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Label,
  RadioGroup,
  RadioGroupItemSelector,
  ScaleOutIn,
  ScrollArea,
  Step,
  StepControl,
  StepRootProvider,
  StepperProvider,
  buttonVariants,
  useStepContext,
  useStepRootContext,
  useStepperContext,
} from "@/components/ui"

const describeYourTeamFormSchema = z.object({
  teamName: z.string().min(1, "Please enter at least 1 character(s)"),
  role: z.string().min(1, "Must enter at least 1 character(s)"),
  industry: z.string().min(1, "Must enter at least 1 character(s)"),
})

type DescribeYourTeamFormValues = z.infer<typeof describeYourTeamFormSchema>

const DescribeYourTeam = ({ sidebar }: { sidebar: React.ReactNode }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<DescribeYourTeamFormValues>({
    resolver: zodResolver(describeYourTeamFormSchema),
  })
  const { toggleValidation } = useStepContext()
  const { nextStep, prevStep, setStep } = useStepperContext()

  useIsomorphicLayoutEffect(() => toggleValidation(isValid), [isValid])

  const { totalSteps, currentStep } = useStepRootContext()

  const progress = ((currentStep + 1) / totalSteps) * 100

  const onSubmit: SubmitHandler<DescribeYourTeamFormValues> = (values) => {
    nextStep()
  }

  const skip = () => {
    toggleValidation(true)
    const nextStepIndex = currentStep + 1
    setStep(nextStepIndex)
  }

  return (
    <div className="min-h-screen flex lg:pl-[480px]">
      {sidebar}
      <div className="relative flex justify-between flex-col flex-auto px-5 md:px-10 py-10 lg:py-[100px] lg:px-[200px]">
        <div className="max-w-[488px] lg:max-w-[560px] w-full mx-auto">
          <div className="flex gap-x-2 items-center">
            <CircularProgress
              show={false}
              size={15.43}
              strokeWidth={2.5}
              value={progress}
            />
            <span className="text-[11px] leading-[15.43px] text-gray-700">
              STEP 1 / 4
            </span>
          </div>

          <h1 className="text-2xl leading-[36px] mt-2 text-dark-blue-400 font-semibold">
            What brings you here today?
          </h1>

          <p className="text-base leading-[19.36px] text-dark-blue-400 mt-2 font-light">
            Whether you&apos;re here to hire or get hired, let&apos;s get you
            set up the right way.
          </p>

          <form
            className="mt-10 lg:mt-[50px] flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-y-1.5">
              <Label htmlFor="your-team-name" size="sm">
                What’s your team name?
              </Label>
              <Input
                id="your-team-name"
                placeholder="Enter your team or company name"
                {...register("teamName")}
                isInvalid={hookFormHasError({ errors, name: "teamName" })}
              />
              <HookFormErrorMessage
                errors={errors}
                name="teamName"
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </div>
            <div className="flex flex-col gap-y-1.5 mt-6">
              <Label htmlFor="your-role" size="sm">
                What’s your role?
              </Label>
              <InputGroup>
                <Input
                  id="your-role"
                  placeholder="Enter your team or company name"
                  {...register("role")}
                  isInvalid={hookFormHasError({ errors, name: "role" })}
                />
                <InputRightElement>
                  <Info className="text-gray-500 h-4 w-4" />
                </InputRightElement>
              </InputGroup>
              <HookFormErrorMessage
                errors={errors}
                name="role"
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </div>
            <div className="flex flex-col gap-y-1.5 mt-6">
              <Label htmlFor="your-industry" size="sm">
                What’s your industry?
              </Label>
              <Input
                id="your-industry"
                placeholder="Enter your industry (e.g. Technology, Healthcare, Retail)"
                {...register("industry")}
                isInvalid={hookFormHasError({ errors, name: "industry" })}
              />
              <HookFormErrorMessage
                errors={errors}
                name="industry"
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </div>
          </form>
        </div>

        <div className="mt-10 lg:mt-[50px] max-w-[488px] lg:max-w-[560px] mx-auto w-full self-end flex justify-between">
          <NextLink
            href="/onboarding"
            className={cn(
              buttonVariants({
                size: "md",
                variant: "outlined",
                visual: "gray",
              })
            )}
          >
            Back
          </NextLink>

          <div className="flex items-center gap-x-6">
            <Button
              className="opacity-50 hover:opacity-100"
              variant="ghost"
              visual="gray"
              type="button"
              onClick={skip}
              size="md"
            >
              Skip
            </Button>

            <Button size="md" visual="primary">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const data = [
  {
    helpText: `Focused on scaling, increasing sales, or entering new markets`,
    label: "Growth & Expansion",
  },
  {
    helpText: `Aiming to improve your brand presence, reputation and visibility`,
    label: "Brand Building & Awareness",
  },
  {
    helpText: `Focused on refining design quality and improving user experience`,
    label: "Design & Strategy",
  },
  {
    helpText: `Improving processes, streamlining workflows, or boosting team productivity`,
    label: "Operational Efficiency & Optimization",
  },
  {
    helpText: `Looking to innovate, improve, or launch new products or services`,
    label: "Product & Service Development",
  },
  {
    helpText: `Adopting new tech, leveraging data, or improving their digital tools`,
    label: "Technology & Innovation",
  },
  {
    helpText: `Focused on boosting customer satisfaction, loyalty, and interactions`,
    label: "Customer Engagement & Retention",
  },
  {
    helpText: `Focused on boosting customer satisfaction, loyalty, and interactions`,
    label: "Recruitment & Team Building",
  },
] as const

const [defaultValue] = data

const shareYourGoalsFormSchema = z
  .object(
    data.reduce(
      (previous, current) => ({ ...previous, [current.label]: z.boolean() }),
      {} as { [Property in (typeof data)[number]["label"]]: z.ZodBoolean }
    )
  )
  .refine((data) => keys(data).some((value) => data[value]), {
    message: "Please select at least 1 option(s)",
    path: [defaultValue.label],
  })

type ShareYourGoalsFormValues = z.infer<typeof shareYourGoalsFormSchema>

const ShareYourGoals = ({ sidebar }: { sidebar: React.ReactNode }) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ShareYourGoalsFormValues>({
    resolver: zodResolver(shareYourGoalsFormSchema),
    defaultValues: data.reduce(
      (previous, current) => ({ ...previous, [current.label]: false }),
      {} as { [Property in (typeof data)[number]["label"]]: boolean }
    ),
  })

  const { toggleValidation } = useStepContext()
  const { nextStep, prevStep, setStep } = useStepperContext()

  useIsomorphicLayoutEffect(() => toggleValidation(isValid), [isValid])

  const { totalSteps, currentStep } = useStepRootContext()

  const progress = ((currentStep + 1) / totalSteps) * 100

  const onSubmit: SubmitHandler<ShareYourGoalsFormValues> = (values) => {
    nextStep()
  }

  const skip = () => {
    toggleValidation(true)
    const nextStepIndex = currentStep + 1
    setStep(nextStepIndex)
  }

  return (
    <div className="min-h-screen flex lg:pl-[480px]">
      {sidebar}
      <form
        className="relative flex justify-between flex-col flex-auto px-5 md:px-10 py-10 lg:py-[100px] lg:px-[200px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="max-w-[488px] lg:max-w-[560px] w-full mx-auto">
          <div className="flex gap-x-2 items-center">
            <CircularProgress
              show={false}
              size={15.43}
              strokeWidth={2.5}
              value={progress}
            />
            <span className="text-[11px] leading-[15.43px] text-gray-700">
              STEP 2 / 4
            </span>
          </div>

          <h1 className="text-2xl leading-[36px] mt-2 text-dark-blue-400 font-semibold">
            What brings you here today?
          </h1>

          <p className="text-base leading-[19.36px] text-dark-blue-400 mt-2 font-light">
            Whether you&apos;re here to hire or get hired, let&apos;s get you
            set up the right way.
          </p>

          <div className="mt-10 lg:mt-[50px]">
            <div className="flex flex-col gap-y-2.5">
              {data.map((item) => (
                <Controller
                  key={item.label}
                  control={control}
                  name={item.label}
                  render={({ field: { onChange, value, ...field } }) => (
                    <CheckboxSelector
                      {...field}
                      checked={value}
                      onCheckedChange={onChange}
                      size="md"
                    >
                      <h1 className="text-sm leading-5 font-medium text-dark-blue-400">
                        {item.label}
                      </h1>
                      <p className="text-sm leading-5 font-light text-dark-blue-400">
                        {item.helpText}
                      </p>
                    </CheckboxSelector>
                  )}
                />
              ))}
            </div>

            <div className="mt-1.5">
              <HookFormErrorMessage
                errors={errors}
                name={defaultValue.label}
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-[50px] max-w-[488px] lg:max-w-[560px] mx-auto w-full self-end flex justify-between">
          <Button
            size="md"
            variant="outlined"
            visual="gray"
            onClick={prevStep}
            type="button"
          >
            Back
          </Button>

          <div className="flex items-center gap-x-6">
            <Button
              className="opacity-50 hover:opacity-100"
              variant="ghost"
              visual="gray"
              onClick={skip}
              type="button"
              size="md"
            >
              Skip
            </Button>
            <Button size="md" visual="primary">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

const inviteYourTeamFormSchema = z.object({
  emails: z.array(
    z.object({
      email: z
        .string()
        .min(1, "Please enter at least 1 character(s)")
        .email("Please enter a valid email"),
    })
  ),
})

type InviteYourTeamFormValues = z.infer<typeof inviteYourTeamFormSchema>

const InviteYourTeam = ({ sidebar }: { sidebar: React.ReactNode }) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
    register,
  } = useForm<InviteYourTeamFormValues>({
    resolver: zodResolver(inviteYourTeamFormSchema),
    defaultValues: {
      emails: [{ email: "" }, { email: "" }, { email: "" }],
    },
  })
  const { toggleValidation } = useStepContext()
  const { nextStep, prevStep, setStep } = useStepperContext()

  useIsomorphicLayoutEffect(() => toggleValidation(isValid), [isValid])

  const { totalSteps, currentStep } = useStepRootContext()

  const progress = ((currentStep + 1) / totalSteps) * 100

  const { fields, append } = useFieldArray({
    control,
    name: "emails",
  })

  const onSubmit: SubmitHandler<InviteYourTeamFormValues> = (values) => {
    nextStep()
  }

  const skip = () => {
    toggleValidation(true)
    const nextStepIndex = currentStep + 1
    setStep(nextStepIndex)
  }

  return (
    <div className="min-h-screen flex lg:pl-[480px]">
      {sidebar}

      <form
        className="relative flex justify-between flex-col flex-auto px-5 md:px-10 py-10 lg:py-[100px] lg:px-[200px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="max-w-[488px] lg:max-w-[560px] w-full mx-auto">
          <div className="flex gap-x-2 items-center">
            <CircularProgress
              show={false}
              size={15.43}
              strokeWidth={2.5}
              value={progress}
            />
            <span className="text-[11px] leading-[15.43px] text-gray-700">
              STEP 3 / 4
            </span>
          </div>

          <h1 className="text-2xl leading-[36px] mt-2 text-dark-blue-400 font-semibold">
            What brings you here today?
          </h1>

          <p className="text-base leading-[19.36px] text-dark-blue-400 mt-2 font-light">
            Whether you&apos;re here to hire or get hired, let&apos;s get you
            set up the right way.
          </p>

          <div className="mt-10 lg:mt-[50px]">
            <div className="flex items-center gap-x-3">
              <span className="text-lg leading-[36px] font-semibold">
                Add your teammates’ emails to invite them
              </span>
              <Info className="size-4 shrink-0 text-gray-500" />
            </div>

            <div className="flex flex-col gap-y-1.5 mt-1.5">
              {fields.map((field, index) => (
                <div className="flex flex-col gap-y-1.5" key={field.id}>
                  <InputGroup>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      {...register(`emails.${index}.email`)}
                      isInvalid={hookFormHasError({
                        errors,
                        name: `emails.${index}.email`,
                      })}
                    />
                    <InputRightElement>
                      <Mail className="text-gray-500 size-5" />
                    </InputRightElement>
                  </InputGroup>

                  <HookFormErrorMessage
                    errors={errors}
                    name={`emails.${index}.email`}
                    render={({ message }) => (
                      <ErrorMessage size="sm">{message}</ErrorMessage>
                    )}
                  />
                </div>
              ))}

              <Button
                className="text-gray-500/50 hover:text-gray-500 self-start"
                size="md"
                variant="link"
                visual="gray"
                type="button"
                onClick={() => append({ email: "" })}
              >
                <Plus className="size-[15px]" /> Add Another
              </Button>
            </div>

            <div className="mt-[50px] flex items-center gap-x-[9px]">
              <span className="flex-auto inline-block h-px bg-[#E1E6EA]" />
              <span className="text-xs leading-5 font-medium text-gray-500">
                Or
              </span>
              <span className="flex-auto inline-block h-px bg-[#E1E6EA]" />
            </div>

            <ClipboardRoot
              className="mt-[50px]"
              value="https://projects.marketeqdigital.com/invite/209283"
            >
              <ClipboardLabel className="text-lg leading-9 font-semibold">
                Share an invite link with your team
              </ClipboardLabel>

              <ClipboardControl>
                <ClipboardInput />
                <ClipboardTrigger className="pr-3.5 w-auto">
                  <ClipboardIndicator
                    copied={
                      <>
                        <Check className="size-[15px]" /> Copied
                      </>
                    }
                  >
                    <Link01 className="size-[15px]" /> Copy Link
                  </ClipboardIndicator>
                </ClipboardTrigger>
              </ClipboardControl>
            </ClipboardRoot>
          </div>
        </div>

        <div className="mt-10 lg:mt-[50px] max-w-[488px] lg:max-w-[560px] mx-auto w-full self-end flex justify-between">
          <Button
            size="md"
            variant="outlined"
            visual="gray"
            onClick={prevStep}
            type="button"
          >
            Back
          </Button>

          <div className="flex items-center gap-x-6">
            <Button
              className="opacity-50 hover:opacity-100"
              variant="ghost"
              visual="gray"
              onClick={skip}
              type="button"
              size="md"
            >
              Skip
            </Button>
            <Button size="md" visual="primary">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

const createYourUsernameFormSchema = z.object({
  username: z.string().min(1, "Please enter at least 1 character(s)"),
})

type CreateYourUsernameFormValues = z.infer<typeof createYourUsernameFormSchema>

const CreateYourUsername = ({ sidebar }: { sidebar: React.ReactNode }) => {
  const [show, toggleShow] = useToggle(false)
  const {
    formState: { errors, isValid },
    setValue,
    register,
    handleSubmit,
    trigger,
  } = useForm<CreateYourUsernameFormValues>({
    resolver: zodResolver(createYourUsernameFormSchema),
  })
  const { toggleValidation } = useStepContext()
  const { nextStep, prevStep, setStep } = useStepperContext()

  useIsomorphicLayoutEffect(() => toggleValidation(isValid), [isValid])

  const { totalSteps, currentStep } = useStepRootContext()

  const progress = ((currentStep + 1) / totalSteps) * 100

  const onSubmit: SubmitHandler<CreateYourUsernameFormValues> = () => {
    nextStep()
  }

  const setFormValue: UseFormSetValue<CreateYourUsernameFormValues> = (
    key,
    value
  ) => {
    setValue(key, value)
    trigger(key)
  }

  const skip = () => {
    toggleValidation(true)
    const nextStepIndex = currentStep + 1
    setStep(nextStepIndex)
  }

  return (
    <div className="min-h-screen flex lg:pl-[480px]">
      {sidebar}

      <form
        className="relative flex justify-between flex-col flex-auto px-5 py-10 md:px-10 lg:py-[100px] lg:px-[200px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="max-w-[488px] lg:max-w-[560px] w-full mx-auto">
          <div className="flex gap-x-2 items-center">
            <CircularProgress
              show={false}
              size={15.43}
              strokeWidth={2.5}
              value={progress}
            />
            <span className="text-[11px] leading-[15.43px] text-gray-700">
              STEP 4 / 5
            </span>
          </div>

          <h1 className="text-2xl leading-[36px] mt-2 text-dark-blue-400 font-semibold">
            Create your username
          </h1>

          <p className="text-base leading-[19.36px] text-dark-blue-400 mt-2 font-light">
            Your username is one-of-a-kind, and you can always update it
            later...
          </p>

          <div className="mt-10 lg:mt-[50px]">
            <div className="flex flex-col gap-y-1.5">
              <Label className="text-dark-blue-400" id="username" size="sm">
                Enter Your Username
              </Label>
              <Input
                id="username"
                {...register("username")}
                isInvalid={hookFormHasError({ errors, name: "username" })}
              />
              <HookFormErrorMessage
                errors={errors}
                name="username"
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </div>

            {show ? (
              <div className="mt-6">
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.design")}
                >
                  @esha.design
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.design")}
                >
                  @esha.design
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
                ,{" "}
                <Button
                  className="text-primary-500/50 hover:text-primary-500"
                  size="lg"
                  visual="gray"
                  variant="link"
                  type="button"
                  onClick={() => setFormValue("username", "@esha.designer")}
                >
                  @esha.designer
                </Button>
              </div>
            ) : (
              <div className="mt-6">
                <span className="block text-sm leading-[16.94px] text-gray-500">
                  <Button
                    className="text-primary-500/50 hover:text-primary-500"
                    size="lg"
                    visual="gray"
                    variant="link"
                    type="button"
                    onClick={() => setFormValue("username", "@esha.design")}
                  >
                    @esha.design
                  </Button>
                  ,{" "}
                  <Button
                    className="text-primary-500/50 hover:text-primary-500"
                    size="lg"
                    visual="gray"
                    variant="link"
                    onClick={() => setFormValue("username", "@esha.design")}
                  >
                    @esha.design
                  </Button>
                  , and{" "}
                  <Button
                    className="text-primary-500/50 hover:text-primary-500"
                    size="lg"
                    visual="gray"
                    variant="link"
                    onClick={() => setFormValue("username", "@esha.designer")}
                  >
                    @esha.designer
                  </Button>{" "}
                  are available
                </span>

                <Button
                  className="mt-3"
                  size="md"
                  variant="link"
                  type="button"
                  visual="gray"
                  onClick={toggleShow}
                >
                  <Plus className="size-[15px]" />
                  More suggestions
                </Button>
              </div>
            )}

            <div className="mt-10 lg:mt-[50px]">
              <Alert>
                <AlertIcon>
                  <AlertCircle className="size-5" />
                </AlertIcon>
                <AlertContent>
                  <AlertDescription className="mt-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                  </AlertDescription>
                </AlertContent>
              </Alert>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-[50px] max-w-[488px] lg:max-w-[560px] mx-auto w-full self-end flex justify-between">
          <Button size="md" variant="outlined" visual="gray" type="button">
            Back
          </Button>

          <div className="flex items-center gap-x-10">
            <Button
              variant="ghost"
              visual="gray"
              type="button"
              size="md"
              onClick={skip}
            >
              Skip
            </Button>
            <Button size="md" visual="primary">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

const roles = [
  "React Developer",
  "Backend Developer",
  "DevOps Engineer",
  "Design Engineer",
  "Game Developer",
  "Front-end Developer",
]

const LookingToWorkWith = ({
  value: valueProp,
  onValueChange,
  invalid,
}: {
  onValueChange?: (value: string[]) => void
  value?: string[]
  invalid?: boolean
}) => {
  const [inputValue, setInputValue] = React.useState("")
  const [values, setValues] = useControllableState<string[]>({
    defaultValue: [],
    onChange: onValueChange,
    value: valueProp,
  })
  const [selected, setSelected] = React.useState<string[]>([])

  const resetInputValue = () => setInputValue("")

  const addValue = () => {
    if (!inputValue) return

    setValues((prev) => {
      return prev.includes(inputValue) ? prev : [...prev, inputValue]
    })
    resetInputValue()
  }

  const removeValue = (index: number) => {
    const tag = values[index]

    setValues((prev) => {
      const nextState = prev.filter((_, i) => i !== index)
      return nextState
    })
    setSelected((prev) => {
      const nextState = prev.filter((value) => value !== tag)
      return nextState
    })
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    setInputValue(value)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    if (key === HOT_KEYS.ENTER) addValue()
  }

  const filteredRoles = roles.filter((role) =>
    role.toLowerCase().includes(inputValue.toLowerCase())
  )

  useIsomorphicLayoutEffect(() => {
    setValues((preValues) => {
      const filteredSelected = selected.filter(
        (value) => !preValues.includes(value)
      )
      return [...preValues, ...filteredSelected]
    })
  }, [selected])

  return (
    <>
      <Combobox
        className="w-full"
        value={selected}
        onChange={setSelected}
        multiple
      >
        <ComboboxTrigger className="flex flex-col gap-y-1.5">
          <ComboboxLabel className="text-dark-blue-400" size="sm">
            Who are you looking to work with?
          </ComboboxLabel>
          <ComboboxInput
            size="lg"
            className="pl-3.5"
            placeholder="Enter job titles related to your project"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={inputValue}
            invalid={invalid}
          />
        </ComboboxTrigger>

        <ScaleOutIn afterLeave={() => setInputValue("")}>
          <ComboboxOptions>
            <ScrollArea viewportClassName="max-h-[304px]">
              {filteredRoles.map((role, index) => (
                <ComboboxOption key={index} value={role}>
                  {role}
                </ComboboxOption>
              ))}
            </ScrollArea>
          </ComboboxOptions>
        </ScaleOutIn>
      </Combobox>

      {getIsNotEmpty(values) && (
        <div className="mt-3 flex flex-wrap gap-3">
          {values.map((item, index) => (
            <Badge visual="primary" key={index}>
              {item}
              <button
                className="focus-visible:outline-none"
                onClick={() => removeValue(index)}
                type="button"
              >
                <X2 className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </>
  )
}

const SkillsLookingFor = ({
  value: valueProp,
  onValueChange,
  invalid,
}: {
  onValueChange?: (value: string[]) => void
  value?: string[]
  invalid?: boolean
}) => {
  const [inputValue, setInputValue] = React.useState("")
  const [values, setValues] = useControllableState<string[]>({
    defaultValue: [],
    onChange: onValueChange,
    value: valueProp,
  })
  const [selected, setSelected] = React.useState<string[]>([])

  const resetInputValue = () => setInputValue("")

  const addValue = () => {
    if (!inputValue) return

    setValues((prev) => {
      return prev.includes(inputValue) ? prev : [...prev, inputValue]
    })
    resetInputValue()
  }

  const removeValue = (index: number) => {
    const tag = values[index]

    setValues((prev) => {
      const nextState = prev.filter((_, i) => i !== index)
      return nextState
    })
    setSelected((prev) => {
      const nextState = prev.filter((value) => value !== tag)
      return nextState
    })
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event
    setInputValue(value)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    if (key === HOT_KEYS.ENTER) addValue()
  }

  const filteredRoles = roles.filter((role) =>
    role.toLowerCase().includes(inputValue.toLowerCase())
  )

  useIsomorphicLayoutEffect(() => {
    setValues((preValues) => {
      const filteredSelected = selected.filter(
        (value) => !preValues.includes(value)
      )
      return [...preValues, ...filteredSelected]
    })
  }, [selected])

  return (
    <>
      <Combobox
        className="w-full"
        value={selected}
        onChange={setSelected}
        multiple
      >
        <ComboboxTrigger className="flex flex-col gap-y-1.5">
          <ComboboxLabel className="text-dark-blue-400" size="sm">
            What skills are you looking for?
          </ComboboxLabel>
          <ComboboxInput
            size="lg"
            className="pl-3.5"
            placeholder="Enter job titles related to your project"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={inputValue}
            invalid={invalid}
          />
        </ComboboxTrigger>

        <ScaleOutIn afterLeave={() => setInputValue("")}>
          <ComboboxOptions>
            <ScrollArea viewportClassName="max-h-[304px]">
              {filteredRoles.map((role, index) => (
                <ComboboxOption key={index} value={role}>
                  {role}
                </ComboboxOption>
              ))}
            </ScrollArea>
          </ComboboxOptions>
        </ScaleOutIn>
      </Combobox>

      {getIsNotEmpty(values) && (
        <div className="mt-3 flex flex-wrap gap-3">
          {values.map((item, index) => (
            <Badge visual="primary" key={index}>
              {item}
              <button
                className="focus-visible:outline-none"
                onClick={() => removeValue(index)}
                type="button"
              >
                <X2 className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </>
  )
}

const industriesOrVerticals = [
  "Tech & Software",
  "Health & Wellness",
  "Marketing & Advertising",
  "Retail & E-commerce",
  "Design & Creative",
  "Entertainment and Gaming",
  "Finance & Consulting",
  "Education & Training",
  "Government & Public Sector",
  "Other",
] as const

const projects = [
  "Sprints (1 - 3 weeks)",
  "Medium Term (3 - 5 months)",
  "Short Term (1 - 3 months)",
  "Long Term (6+ months)",
] as const

const budget = [
  "$100 - $500",
  "$25,000 - $50,000",
  "$500 - $1000",
  "$50,000 - $100,000",
  "$1,000 - $5,000",
  "$100,000 - $250,000",
  "$5,000 - $10,000",
  "$250,000 - $500,000",
  "$10,000 - $25,000",
  "$500,000 +",
] as const

const outlineYourInterestsFormSchema = z
  .object({
    industriesOrVerticals: z.object(
      industriesOrVerticals.reduce(
        (previous, current) => ({ ...previous, [current]: z.boolean() }),
        {} as { [Key in (typeof industriesOrVerticals)[number]]: z.ZodBoolean }
      )
    ),
    projects: z.object(
      projects.reduce(
        (previous, current) => ({ ...previous, [current]: z.boolean() }),
        {} as { [Key in (typeof projects)[number]]: z.ZodBoolean }
      )
    ),
    budget: z.enum(budget, {
      required_error: "Please select at least 1 option(s)",
    }),
    lookingToWorkWith: z
      .array(z.string())
      .min(1, "Please select at least 1 option(s)"),
    skillsLookingFor: z
      .array(z.string())
      .min(1, "Please select at least 1 option(s)"),
  })
  .refine(
    (data) =>
      industriesOrVerticals.some((item) => data.industriesOrVerticals[item]),
    {
      message: "Please select at least 1 option(s)",
      path: ["industriesOrVerticals"],
    }
  )
  .refine((data) => projects.some((item) => data.projects[item]), {
    message: "Please select at least 1 option(s)",
    path: ["projects"],
  })

type OutlineYourInterestsFormValues = z.infer<
  typeof outlineYourInterestsFormSchema
>

const OutlineYourInterests = ({ sidebar }: { sidebar: React.ReactNode }) => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<OutlineYourInterestsFormValues>({
    resolver: zodResolver(outlineYourInterestsFormSchema),
    defaultValues: {
      industriesOrVerticals: industriesOrVerticals.reduce(
        (previous, current) => ({ ...previous, [current]: false }),
        {} as { [Key in (typeof industriesOrVerticals)[number]]: boolean }
      ),
      projects: projects.reduce(
        (previous, current) => ({ ...previous, [current]: false }),
        {} as { [Key in (typeof projects)[number]]: boolean }
      ),
    },
  })
  const { toggleValidation } = useStepContext()
  const { nextStep, prevStep, setStep } = useStepperContext()

  useIsomorphicLayoutEffect(() => toggleValidation(isValid), [isValid])

  const { totalSteps, currentStep } = useStepRootContext()

  const progress = ((currentStep + 1) / totalSteps) * 100

  const onSubmit: SubmitHandler<OutlineYourInterestsFormValues> = () => {
    nextStep()
  }

  const skip = () => {
    toggleValidation(true)
    const nextStepIndex = currentStep + 1
    setStep(nextStepIndex)
  }

  return (
    <div className="min-h-screen flex lg:pl-[480px]">
      {sidebar}
      <form
        className="relative flex justify-between flex-col flex-auto px-5 md:px-10 py-10 lg:py-[100px] lg:px-[200px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="max-w-[688px] lg:max-w-[560px] w-full mx-auto">
          <div className="flex gap-x-2 items-center">
            <CircularProgress
              show={false}
              size={15.43}
              strokeWidth={2.5}
              value={progress}
            />
            <span className="text-[11px] leading-[15.43px] text-gray-700">
              STEP 5 / 5
            </span>
          </div>

          <h1 className="text-2xl leading-[36px] mt-2 text-dark-blue-400 font-semibold">
            Outline Your Interests
          </h1>

          <p className="text-base leading-[19.36px] text-dark-blue-400 mt-2 font-light">
            Share an invite with your team so they can be part of the process.
          </p>

          <div className="mt-[50px]">
            <div className="space-y-1.5">
              <div className="flex items-center gap-x-3">
                <h1 className="text-lg leading-9 font-semibold text-dark-blue-400">
                  What industries or verticals do you work in?
                </h1>
                <AlertCircle className="size-6 text-gray-500" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {industriesOrVerticals.map((item) => (
                  <Controller
                    key={item}
                    control={control}
                    name={`industriesOrVerticals.${item}`}
                    render={({ field: { value, onChange, ...field } }) => (
                      <CheckboxSelector
                        checked={value}
                        onCheckedChange={onChange}
                        {...field}
                      >
                        <span className="text-sm leading-5 font-medium text-dark-blue-400">
                          {item}
                        </span>
                      </CheckboxSelector>
                    )}
                  />
                ))}
              </div>

              <HookFormErrorMessage
                errors={errors}
                name="industriesOrVerticals.root"
                render={({ message }) => (
                  <ErrorMessage size="sm">{message}</ErrorMessage>
                )}
              />
            </div>

            <div className="mt-10 lg:mt-[50px]">
              <div className="flex flex-col gap-y-1.5">
                <Controller
                  control={control}
                  name="lookingToWorkWith"
                  render={({ field: { value, onChange } }) => (
                    <LookingToWorkWith
                      value={value}
                      onValueChange={onChange}
                      invalid={hookFormHasError({
                        errors,
                        name: "lookingToWorkWith",
                      })}
                    />
                  )}
                />
                <HookFormErrorMessage
                  errors={errors}
                  name="lookingToWorkWith"
                  render={({ message }) => (
                    <ErrorMessage size="sm">{message}</ErrorMessage>
                  )}
                />
              </div>

              <div className="p-5 mt-5 bg-gray-50">
                <span className="block text-xs leading-5 text-dark-blue-400">
                  Who are you looking to work with?
                </span>

                <div className="mt-3 flex gap-3 flex-wrap">
                  <Badge visual="gray">Data Scientist</Badge>
                  <Badge visual="gray">IOS Engineer</Badge>
                  <Badge visual="gray">Data Scientist</Badge>
                  <Badge visual="gray">UX/UI Designer</Badge>
                  <Badge visual="gray">IOS Engineer</Badge>
                  <Badge visual="gray">Data Scientist</Badge>
                  <Badge visual="gray">UX/UI Designer</Badge>
                  <Badge visual="gray">IOS Engineer</Badge>
                  <Badge visual="gray">UX/UI Designer</Badge>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-[50px]">
              <div className="flex flex-col gap-y-1.5">
                <Controller
                  control={control}
                  name="skillsLookingFor"
                  render={({ field: { value, onChange } }) => (
                    <SkillsLookingFor value={value} onValueChange={onChange} />
                  )}
                />
                <HookFormErrorMessage
                  errors={errors}
                  name="skillsLookingFor"
                  render={({ message }) => (
                    <ErrorMessage size="sm">{message}</ErrorMessage>
                  )}
                />
              </div>

              <div className="p-5 mt-5 bg-gray-50">
                <span className="block text-xs leading-5 text-dark-blue-400">
                  Recommended skills
                </span>

                <div className="mt-3 flex gap-3 flex-wrap">
                  <Badge visual="gray">Data Scientist</Badge>
                  <Badge visual="gray">IOS Engineer</Badge>
                  <Badge visual="gray">Data Scientist</Badge>
                  <Badge visual="gray">UX/UI Designer</Badge>
                  <Badge visual="gray">IOS Engineer</Badge>
                  <Badge visual="gray">Data Scientist</Badge>
                  <Badge visual="gray">UX/UI Designer</Badge>
                  <Badge visual="gray">IOS Engineer</Badge>
                  <Badge visual="gray">UX/UI Designer</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 mt-10 lg:mt-[50px]">
              <div className="flex items-center gap-x-3">
                <h1 className="text-lg leading-9 font-semibold text-dark-blue-400">
                  What types of projects are you interested in?
                </h1>
                <AlertCircle className="size-6 text-gray-500" />
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {projects.map((item, index) => (
                  <Controller
                    key={item}
                    control={control}
                    name={`projects.${item}`}
                    render={({ field: { value, onChange, ...field } }) => (
                      <CheckboxSelector
                        key={index}
                        checked={value}
                        onCheckedChange={onChange}
                        {...field}
                      >
                        <span className="text-sm leading-5 font-medium text-dark-blue-400">
                          Sprints (1 - 3 weeks)
                        </span>
                      </CheckboxSelector>
                    )}
                  />
                ))}
                <HookFormErrorMessage
                  errors={errors}
                  name="projects.root"
                  render={({ message }) => (
                    <ErrorMessage size="sm">{message}</ErrorMessage>
                  )}
                />
              </div>
            </div>

            <div className="space-y-1.5 mt-10 lg:mt-[50px]">
              <div className="flex items-center gap-x-3">
                <h1 className="text-lg leading-9 font-semibold text-dark-blue-400">
                  What’s your budget?
                </h1>
                <AlertCircle className="size-6 text-gray-500" />
              </div>

              <div className="flex flex-col gap-y-1.5">
                <Controller
                  control={control}
                  name="budget"
                  render={({ field: { value, onChange } }) => (
                    <RadioGroup
                      className="grid grid-cols-2 gap-2.5"
                      value={value}
                      onValueChange={onChange}
                    >
                      {budget.map((item, index) => (
                        <RadioGroupItemSelector value={item} key={index}>
                          <span className="text-sm leading-5 font-medium text-dark-blue-400">
                            $100 - $500
                          </span>
                        </RadioGroupItemSelector>
                      ))}
                    </RadioGroup>
                  )}
                />
                <HookFormErrorMessage
                  errors={errors}
                  name="budget"
                  render={({ message }) => (
                    <ErrorMessage size="sm">{message}</ErrorMessage>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-[50px] max-w-[488px] lg:max-w-[560px] mx-auto w-full self-end flex justify-between">
          <Button
            size="md"
            variant="outlined"
            visual="gray"
            onClick={prevStep}
            type="button"
          >
            Back
          </Button>

          <div className="flex items-center gap-x-6">
            <Button
              className="opacity-50 hover:opacity-100"
              variant="ghost"
              visual="gray"
              onClick={skip}
              type="button"
              size="md"
            >
              Skip
            </Button>
            <Button size="md" visual="primary">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

const DoNext = ({ sidebar }: { sidebar: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex lg:pl-[480px]">
      {sidebar}

      <div className="relative flex justify-between flex-col flex-auto px-5 md:px-10 py-10 lg:py-[100px] lg:px-[150px]">
        <div className="max-w-[688px] lg:max-w-[660px] w-full mx-auto">
          <h1 className="text-2xl leading-[36px] mt-2 text-dark-blue-400 font-semibold">
            What would you like to do next?
          </h1>

          <p className="text-base leading-[19.36px] text-dark-blue-400 mt-2 font-light">
            Choose your next move and get started
          </p>

          <div className="mt-10 md:mt-[50px] grid md:grid-cols-2 gap-2.5 lg:gap-5">
            <div className="p-3 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] hover:ring-1 hover:ring-gray-300 hover:border-gray-300 cursor-pointer transition duration-300">
              <div className="flex items-center gap-x-3">
                <div className="size-11 rounded-lg border-[1.5px] shrink-0 inline-flex items-center justify-center border-[#EAECF0] text-primary-500">
                  <Briefcase02 className="size-5" />
                </div>
                <span className="text-sm leading-[16.94px] inline-block font-medium text-gray-900">
                  Browse Projects
                </span>
              </div>

              <ChevronRight className="shrink-0 size-5" />
            </div>
            <div className="p-3 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] hover:ring-1 hover:ring-gray-300 hover:border-gray-300 cursor-pointer transition duration-300">
              <div className="flex items-center gap-x-3">
                <div className="size-11 rounded-lg border-[1.5px] shrink-0 inline-flex items-center justify-center border-[#EAECF0] text-primary-500">
                  <Users03 className="size-5" />
                </div>
                <span className="text-sm leading-[16.94px] inline-block font-medium text-gray-900">
                  Browse Teams
                </span>
              </div>

              <ChevronRight className="shrink-0 size-5" />
            </div>
            <div className="p-3 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] hover:ring-1 hover:ring-gray-300 hover:border-gray-300 cursor-pointer transition duration-300">
              <div className="flex items-center gap-x-3">
                <div className="size-11 rounded-lg border-[1.5px] shrink-0 inline-flex items-center justify-center border-[#EAECF0] text-primary-500">
                  <Briefcase02 className="size-5" />
                </div>
                <span className="text-sm leading-[16.94px] inline-block font-medium text-gray-900">
                  Find Talent
                </span>
              </div>

              <ChevronRight className="shrink-0 size-5" />
            </div>
            <div className="p-3 flex items-center justify-between bg-white border border-gray-200 rounded-lg shadow-[0px_1px_5px_0px_rgba(16,24,40,.02)] hover:ring-1 hover:ring-gray-300 hover:border-gray-300 cursor-pointer transition duration-300">
              <div className="flex items-center gap-x-3">
                <div className="size-11 rounded-lg border-[1.5px] shrink-0 inline-flex items-center justify-center border-[#EAECF0] text-primary-500">
                  <Briefcase02 className="size-5" />
                </div>
                <span className="text-sm leading-[16.94px] inline-block font-medium text-gray-900">
                  Browse Projects
                </span>
              </div>

              <ChevronRight className="shrink-0 size-5" />
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-[50px] max-w-[688px] lg:max-w-[660px] mx-auto w-full self-end flex justify-end">
          <Button className="text-primary-500" variant="link" visual="gray">
            <Home03 className="size-[15px]" /> Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}

const DoNextSidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 p-[75px] w-[480px] xs:max-lg:hidden shrink-0 flex flex-col bg-dark-blue-500">
      <NextLink href="/" className="focus-visible:outline-none">
        <Logo className="h-9 w-[245px] shrink-0" />
      </NextLink>

      <div className="mt-[94px]">
        <h1 className="text-[45px] leading-none font-bold text-white">
          Welcome to Marketeq!
        </h1>

        <div className="mt-[30px]">
          <span className="text-white text-[22px] leading-[26.63px]">
            Unlock your potential and explore exciting opportunities
          </span>
        </div>
      </div>

      <Triangles className="absolute bottom-0 right-0" />

      <ul className="relative mt-[30px] flex flex-col gap-y-[30px]">
        <li className="flex items-center gap-x-[13px]">
          <Check className="size-[22px] text-primary-500" />
          <span className="text-sm leading-[16.94px] text-white font-light">
            Find top talent or exciting projects
          </span>
        </li>
        <li className="flex items-center gap-x-[13px]">
          <Check className="size-[22px] text-primary-500" />
          <span className="text-sm leading-[16.94px] text-white font-light">
            Manage all your projects in one place
          </span>
        </li>
        <li className="flex items-center gap-x-[13px]">
          <Check className="size-[22px] text-primary-500" />
          <span className="text-sm leading-[16.94px] text-white font-light">
            Track progress in real-time
          </span>
        </li>
        <li className="flex items-center gap-x-[13px]">
          <Check className="size-[22px] text-primary-500" />
          <span className="text-sm leading-[16.94px] text-white font-light">
            Collaborate with ease
          </span>
        </li>
        <li className="flex items-center gap-x-[13px]">
          <Check className="size-[22px] text-primary-500" />
          <span className="text-sm leading-[16.94px] text-white font-light">
            Secure contracts and payments
          </span>
        </li>
      </ul>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 p-[75px] w-[480px] xs:max-lg:hidden shrink-0 flex flex-col bg-dark-blue-500">
      <NextLink href="/" className="focus-visible:outline-none">
        <Logo className="h-9 w-[245px] shrink-0" />
      </NextLink>

      <div className="mt-[94px]">
        <h1 className="text-[45px] leading-none font-bold text-white">
          Connect. Create. Conquer.
        </h1>

        <div className="mt-[30px]">
          <span className="text-white text-[22px] leading-[26.63px]">
            From ideas to execution, find the talent that can make it happen.
          </span>
        </div>
      </div>

      <Triangles className="absolute bottom-0 right-0" />

      <div className="relative mt-auto flex flex-col gap-y-5">
        <span className="text-base leading-[19.36px] text-white focus-visible:outline-none">
          Already have an account?
        </span>

        <div className="relative self-start">
          <Button
            className="hover:bg-white hover:text-dark-blue-400 border-white/[.2] text-white hover:border-white"
            size="lg"
            visual="gray"
            variant="outlined"
          >
            Sign In
          </Button>
          <Pointer className="absolute top-[34px] right-0 -rotate-6" />
        </div>
      </div>
    </div>
  )
}

const steps: Steps[] = [
  { label: "describe-your-team", isValid: false, disabled: false },
  { label: "share-your-goals", isValid: false, disabled: true },
  { label: "invite-your-team", isValid: false, disabled: true },
  { label: "create-your-username", isValid: false, disabled: true },
  { label: "outline-your-interests", isValid: false, disabled: true },
  { label: "do-next", isValid: false, disabled: true },
]

const ClientOnboarding = ({
  describeYourTeam,
  shareYourGoals,
  inviteYourTeam,
  createYourUsername,
  doNext,
  outlineYourInterests,
}: {
  describeYourTeam?: React.ReactNode
  shareYourGoals?: React.ReactNode
  inviteYourTeam?: React.ReactNode
  createYourUsername?: React.ReactNode
  outlineYourInterests?: React.ReactNode
  doNext?: React.ReactNode
}) => {
  const {
    nextStep,
    prevStep,
    setStep,
    toggleStepValidation,
    state: { currentStep, hasNextStep, hasPreviousStep, totalSteps },
    stepsState,
  } = useStepper({
    steps,
  })

  const stepperValue = useMemo(
    () => ({ nextStep, prevStep, setStep, toggleStepValidation }),
    [nextStep, prevStep, setStep, toggleStepValidation]
  )
  const stepperRootValue = useMemo(
    () => ({
      currentStep,
      hasNextStep,
      hasPreviousStep,
      totalSteps,
      stepsState,
    }),
    [currentStep, hasNextStep, hasPreviousStep, totalSteps, stepsState]
  )

  return (
    <StepperProvider value={stepperValue}>
      <StepRootProvider value={stepperRootValue}>
        <StepControl>
          <Step>{describeYourTeam}</Step>
          <Step>{shareYourGoals}</Step>
          <Step>{inviteYourTeam}</Step>
          <Step>{createYourUsername}</Step>
          <Step>{outlineYourInterests}</Step>
          <Step>{doNext}</Step>
        </StepControl>
      </StepRootProvider>
    </StepperProvider>
  )
}

export default function ClientOnboardingRoot() {
  return (
    <ClientOnboarding
      describeYourTeam={<DescribeYourTeam sidebar={<Sidebar />} />}
      shareYourGoals={<ShareYourGoals sidebar={<Sidebar />} />}
      inviteYourTeam={<InviteYourTeam sidebar={<Sidebar />} />}
      createYourUsername={<CreateYourUsername sidebar={<Sidebar />} />}
      outlineYourInterests={<OutlineYourInterests sidebar={<Sidebar />} />}
      doNext={<DoNext sidebar={<DoNextSidebar />} />}
    />
  )
}
