import { Controller } from "react-hook-form";
import { DatePickerWithRange } from "./DatePicker";
import { Textarea } from "@/components/ui/textarea";
import { UploadBox } from "./UploadBox";
import LetterOfGoodStandingUpload from "./LetterOfGoodStandingUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import availableRotationDates from "@/constants/availableRotationDates";

export default function ApplicationInfoForm({ control }) {
  return (
    <>
      {/* Rotation Dates */}
      <label className="block w-1/3">
        Rotation Dates
        <Controller
          name="rotationDates"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select rotation dates" />
              </SelectTrigger>
              <SelectContent>
                {availableRotationDates.map((range, index) => (
                  <SelectItem key={index} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </label>

      {/* Message to Preceptor */}
      <label className="block h-44">
        Message to Preceptor
        <Controller
          control={control}
          name="message"
          render={({ field, fieldState }) => (
            <>
              <Textarea
                className="h-full"
                placeholder="Write your message..."
                {...field}
              />
              {fieldState.error && (
                <p className="text-red-500 text-sm">
                  {fieldState.error.message}
                </p>
              )}
            </>
          )}
        />
      </label>

      <h2>Application Documents</h2>
      <div className="flex gap-4">
        {/* Upload CV */}
        <Controller
          control={control}
          name="cv"
          render={({ field, fieldState }) => (
            <UploadBox
              label="Upload CV / Resume"
              accept="application/pdf"
              field={field}
              error={fieldState.error}
            />
          )}
        />

        {/* Drug Screening */}
        <Controller
          control={control}
          name="drugScreening"
          render={({ field, fieldState }) => (
            <UploadBox
              label="Drug Screening"
              accept="application/pdf"
              field={field}
              error={fieldState.error}
            />
          )}
        />

        {/* Transcript */}
        <Controller
          control={control}
          name="transcript"
          render={({ field, fieldState }) => (
            <UploadBox
              label="Transcript"
              accept="application/pdf"
              field={field}
              error={fieldState.error}
            />
          )}
        />
      </div>

      <h2>Other Documents</h2>
      <LetterOfGoodStandingUpload control={control} />
    </>
  );
}
